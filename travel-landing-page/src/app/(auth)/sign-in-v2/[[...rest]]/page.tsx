"use client";

import { useEffect, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Types
import { OAuthStrategy, LoginFormData } from "@/types/auth";

// Constants
import { SCHEMA } from "@/constants/validation";
import { ERROR_MESSAGES } from "@/constants/messages";

// Components
import Input from "@/components/Input";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import Heading from "@/components/Heading";
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

const SignInPageV2 = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
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

  const handleSubmit = async ({ email, password }: LoginFormData) => {
    if (!isLoaded) return;

    try {
      const attempt = await signIn.create({
        identifier: email,
        password,
      });

      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.push(redirectUrl || "/");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to sign in.";
      setErrorMessage(message);
    }
  };

  const handleSocialLogin = async (provider: OAuthStrategy) => {
    if (isLoading) return;

    try {
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/",
        redirectUrlComplete: redirectUrl || "/",
      });

      setSocialLoading(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : ERROR_MESSAGES.SIGN_IN_FAILED;
      setErrorMessage(message);
      setSocialLoading(null);
    }
  };

  const handleSignInWithFacebook = () => {
    setSocialLoading(OAuthStrategy.Facebook);
    handleSocialLogin(OAuthStrategy.Facebook);
  };

  const handleSignInWithGoogle = () => {
    setSocialLoading(OAuthStrategy.Google);
    handleSocialLogin(OAuthStrategy.Google);
  };

  const handleGoToSignUp = () => {
    router.push("/sign-up-v2");
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
            className="@container w-full mx-auto md:max-w-[545px]"
          >
            <div className="flex-col justify-center align-middle items-center content-center">
              <Heading as="h2" className="font-abel text-center">
                Sign In
              </Heading>
              <div className="w-full flex flex-col @md:flex-row justify-between mt-12.5 gap-1.5 @md:gap-2.5">
                <Button
                  type="button"
                  disabled={!!socialLoading}
                  onClick={handleSignInWithFacebook}
                  className="gap-2.5 @md:flex-1/2 bg-facebook hover:bg-facebook/75 transition-colors duration-300"
                >
                  <FacebookIcon />
                  <div className="border-l-[1px] h-5 border-foreground" />
                  Sign in with Facebook
                  {socialLoading === OAuthStrategy.Facebook && (
                    <Loading iconOnly iconClassName="size-6!" wrapperClassName="w-fit!" />
                  )}
                </Button>

                <Button
                  type="button"
                  disabled={!!socialLoading}
                  onClick={handleSignInWithGoogle}
                  className="gap-2.5 @md:flex-1/2 bg-google hover:bg-google/75 transition-colors duration-300"
                >
                  <GoogleIcon />
                  <div className="border-l-[1px] h-5 border-foreground" />
                  Sign in with Google
                  {socialLoading === OAuthStrategy.Google && (
                    <Loading iconOnly iconClassName="size-6!" wrapperClassName="w-fit!" />
                  )}
                </Button>
              </div>
              <div className="flex flex-col gap-7.5">
                <div className="flex flex-col justify-center items-center h-10 relative pt-5">
                  <div className="h-[1px] bg-input absolute z-1 w-full" />
                  <span className="flex items-center h-2.5 px-3 bg-background z-2">OR</span>
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
                <div className="flex justify-between -mt-4">
                  <Checkbox label="Remember me" disabled={isLoading} />
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-link hover:text-link/90 p-0 hover:bg-transparent hover:underline"
                  >
                    Forgot password?
                  </Button>
                </div>

                <div className="w-full">
                  {errorMessage && <p className="text-error text-center my-2">{errorMessage}</p>}
                  <Button className="text-sm w-full">
                    {isLoading ? "Submitting..." : " Sign In"}
                  </Button>
                </div>
                <div className="flex justify-center items-center text-center gap">
                  Don&#8217;t have an account?&nbsp;
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleGoToSignUp}
                    className="text-link hover:text-link/90 p-0 hover:bg-transparent hover:underline gap-1"
                  >
                    Sign up
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

export default SignInPageV2;
