"use client";

import { useEffect, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

// Types
import { ContinueFormData } from "@/types/auth";

// Constants
import { SCHEMA } from "@/constants/validation";

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

const ContinueSignUpPage = () => {
  const { signUp, isLoaded, setActive } = useSignUp();

  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<ContinueFormData>({
    defaultValues: { username: "" },
    mode: "onBlur",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { isSubmitting } = form.formState;
  const isLoading = isSubmitting || !isLoaded;
  const redirectUrl = searchParams.get("redirect_url") || "/";

  const handleSubmit = async (data: ContinueFormData) => {
    if (!isLoaded || !signUp) return;

    try {
      const attempt = await signUp.update({
        username: data.username,
      });

      if (attempt.status === "complete") {
        await setActive({ session: signUp.createdSessionId });
        router.push(redirectUrl || "/");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to complete sign up.";
      setErrorMessage(message);
    }
  };

  const handleGoToSignIn = () => {
    router.push("/sign-in-v2");
  };

  useEffect(() => {
    if (isLoaded && signUp && signUp.status === "complete") {
      router.replace(redirectUrl || "/");
    }
  }, [isLoaded, signUp, redirectUrl]);

  return (
    <div className="mx-auto overflow-hidden md:min-w-[545px] px-2 md:px-5">
      <Form {...form}>
        <fieldset disabled={isSubmitting}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Heading as="h4" className="font-abel text-center">
              Continue registration
            </Heading>

            <div className="w-full flex flex-col mt-12.5 gap-7.5">
              <FormField
                control={form.control}
                name="username"
                rules={SCHEMA.userName}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
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
                  {isLoading ? "Submitting..." : " Continue"}
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

export default ContinueSignUpPage;
