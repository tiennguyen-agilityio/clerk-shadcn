"use client";

import { useEffect, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Types
import { OAuthStrategy, SignUpFormData } from "@/types/auth";

// Constants
import { SCHEMA } from "@/constants/validation";
import { ERROR_MESSAGES } from "@/constants/messages";
import { DAYS, MONTHS, YEARS } from "@/constants/common";

// Components
import Input from "@/components/Input";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import Checkbox from "@/components/Checkbox";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Select from "@/components/Select";

const SignUpPageV2 = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      day: "",
      month: "",
      year: "",
    },
    mode: "onBlur",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [socialLoading, setSocialLoading] = useState<null | OAuthStrategy>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState<string>("");

  const { isSubmitting } = form.formState;

  const isLoading = isSubmitting || !isLoaded;

  const handleToggleVisible = () => setIsPasswordVisible((prev) => !prev);

  const handleSubmit = async (data: SignUpFormData) => {
    if (!isLoaded) return;
    setErrorMessage("");

    try {
      const { firstName, lastName, email, password, day, month, year } = data;

      const attempt = await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
        unsafeMetadata: {
          dob: `${day} ${month} ${year}`,
        },
      });

      if (attempt.status === "missing_requirements") {
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        router.push(`/sign-up-v2/verify?redirect_url=${encodeURIComponent(redirectUrl)}`);
      } else if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.push(redirectUrl || "/");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to sign up.";
      setErrorMessage(message);
    }
  };

  const handleSocialSignUp = async (provider: OAuthStrategy) => {
    setErrorMessage("");

    if (!isLoaded) return;

    setSocialLoading(provider);

    try {
      await signUp.authenticateWithRedirect({
        strategy: provider,
        continueSignIn: true,
        redirectUrl: `/sign-up-v2/continue?redirect_url=${encodeURIComponent(redirectUrl)}`,
        redirectUrlComplete: redirectUrl || "/",
      });

      setSocialLoading(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : ERROR_MESSAGES.SIGN_UP_FAILED;
      setErrorMessage(message);
      setSocialLoading(null);
    }
  };

  const handleSignInWithFacebook = () => {
    handleSocialSignUp(OAuthStrategy.Facebook);
  };

  const handleSignInWithGoogle = () => {
    handleSocialSignUp(OAuthStrategy.Google);
  };

  const handleGoToSignIn = () => {
    router.push("/sign-in-v2");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.slice(2));

      const redirect = params.get("redirect_url") || "";

      if (redirect) {
        const decoded = decodeURIComponent(redirect);
        const url = new URL(decoded);
        setRedirectUrl(url.pathname);
      }
    }
  }, []);

  return (
    <div className="container mx-auto overflow-hidden px-2 md:px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <fieldset
            disabled={isSubmitting || !!socialLoading}
            className="@container w-full mx-auto md:max-w-[545px] @md:px-5"
          >
            <div className="w-full flex-col justify-center items-center content-center">
              <Heading as="h1" className="font-abel text-center">
                Create Account
              </Heading>
              <div className="flex flex-col @md:flex-row justify-between mt-12.5 gap-1.5 @md:gap-2.5">
                <Button
                  type="button"
                  onClick={handleSignInWithFacebook}
                  className="gap-2.5 @md:flex-1/2 bg-facebook hover:bg-facebook/75 transition-colors duration-300"
                >
                  <FacebookIcon className="hidden sm:block" />
                  <div className="border-l-[1px] h-5 border-foreground" />
                  Sign in with Facebook
                  {socialLoading === OAuthStrategy.Facebook && (
                    <Loading iconOnly iconClassName="max-size-6!" wrapperClassName="w-fit!" />
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={handleSignInWithGoogle}
                  className="gap-2.5 @md:flex-1/2 bg-google hover:bg-google/75 transition-colors duration-300"
                >
                  <GoogleIcon />
                  <div className="border-l-[1px] h-5 border-foreground" />
                  Sign in with Google
                  {socialLoading === OAuthStrategy.Google && (
                    <Loading iconOnly iconClassName="size-6!" wrapperClassName="w-fit! h-fit!" />
                  )}
                </Button>
              </div>
              <div id="clerk-captcha" className="mt-5 text-center" />
              <div className="flex flex-col gap-7.5">
                <div className="flex flex-col justify-center items-center h-10 relative pt-5">
                  <div className="h-[1px] bg-input absolute z-1 w-full" />
                  <span className="flex items-center h-2.5 px-3 bg-background z-2">OR</span>
                </div>
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    rules={SCHEMA.firstName}
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter first name"
                            onChange={(e) => {
                              field.onChange(e);
                              if (errorMessage) setErrorMessage("");
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    rules={SCHEMA.lastName}
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter last name"
                            onChange={(e) => {
                              field.onChange(e);
                              if (errorMessage) setErrorMessage("");
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  rules={SCHEMA.email}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Email"
                          onChange={(e) => {
                            field.onChange(e);
                            if (errorMessage) setErrorMessage("");
                          }}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  rules={SCHEMA.password}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-current">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Enter password"
                            onChange={(e) => {
                              field.onChange(e);
                              if (errorMessage) setErrorMessage("");
                            }}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={handleToggleVisible}
                            className="absolute top-0 right-3 h-full px-1 text-link hover:text-link/80 hover:bg-transparent"
                          >
                            {isPasswordVisible ? "Hide Password" : "Show Password"}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-2">
                  <label className="mb-1.25">Date of Birth</label>
                  <div className="flex gap-5">
                    <FormField
                      control={form.control}
                      name="day"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormControl>
                            <Select
                              placeholder="Day"
                              value={field.value}
                              options={DAYS}
                              onValueChange={(value) => {
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="month"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormControl>
                            <Select
                              placeholder="Month"
                              value={field.value}
                              options={MONTHS}
                              onValueChange={(value) => {
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormControl>
                            <Select
                              placeholder="Year"
                              value={field.value}
                              options={YEARS}
                              onValueChange={(value) => {
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Checkbox label="I have read and agree to the Terms and Conditions" />

                <div className="w-full">
                  {errorMessage && <p className="text-error text-center my-2">{errorMessage}</p>}
                  <Button className="text-sm w-full">
                    {isLoading ? "Submitting..." : " Sign Up"}
                  </Button>
                </div>

                <div className="flex justify-center items-center text-center">
                  Already have an Account?&nbsp;
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleGoToSignIn}
                    className="text-link hover:text-link/80 p-0 hover:bg-transparent hover:underline gap-1"
                  >
                    Log In
                  </Button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default SignUpPageV2;
