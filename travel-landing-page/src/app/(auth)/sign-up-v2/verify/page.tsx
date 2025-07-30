"use client";

import { useEffect, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

// Types
import { VerifyFormData } from "@/types/auth";

// Constants
import { SCHEMA } from "@/constants/validation";
import { ERROR_MESSAGES } from "@/constants/messages";

// Components
import Input from "@/components/Input";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const VerifySignUpPageV2 = () => {
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<VerifyFormData>({
    defaultValues: { code: "" },
    mode: "onBlur",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { isSubmitting } = form.formState;
  const isLoading = isSubmitting || !isLoaded;
  const redirectUrl = searchParams.get("redirect_url") || "/";

  const handleSubmit = async ({ code }: VerifyFormData) => {
    if (!isLoaded || !signUp) return;
    setErrorMessage("");

    try {
      const attempt = await signUp.attemptEmailAddressVerification({ code });

      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.push(redirectUrl);
        return;
      }

      if (attempt.status === "missing_requirements") {
        router.push(`/sign-up-v2/continue?redirect_url=${encodeURIComponent(redirectUrl)}`);
        return;
      }

      setErrorMessage(ERROR_MESSAGES.VERIFICATION_INCOMPLETE);
    } catch (err) {
      const message = err instanceof Error ? err.message : ERROR_MESSAGES.VERIFICATION_INCOMPLETE;
      setErrorMessage(message);
    }
  };

  const handleGoToSignIn = () => {
    router.push("/sign-in-v2");
  };

  useEffect(() => {
    if (isLoaded && signUp && signUp.status === "complete") {
      router.push(redirectUrl);
    }
  }, [isLoaded, signUp, router, redirectUrl]);

  return (
    <div className="mx-auto overflow-hidden w-[545px]">
      <Form {...form}>
        <fieldset disabled={isSubmitting}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Heading as="h4" className="font-abel text-center">
              Verify email code
            </Heading>

            <div className="w-full flex flex-col mt-12.5 gap-7.5">
              <FormField
                control={form.control}
                name="code"
                rules={SCHEMA.code}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Choose a username"
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

              <div className="w-full">
                {errorMessage && <p className="text-error text-center my-2">{errorMessage}</p>}
                <Button className="text-sm w-full">
                  {isLoading ? "Submitting..." : " Verify"}
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
          </form>
        </fieldset>
      </Form>
    </div>
  );
};

export default VerifySignUpPageV2;
