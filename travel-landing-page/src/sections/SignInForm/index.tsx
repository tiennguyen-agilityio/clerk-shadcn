"use client";

import * as SignIn from "@clerk/elements/sign-in";
import * as Clerk from "@clerk/elements/common";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Loading from "@/components/Loading";
import Divider from "@/components/Divider";

import SocialButtons from "../SocialButtons";
import ClerkField from "../ClerkField";

const SignInForm = () => {
  return (
    <div className="container text-sm">
      <SignIn.Root fallback={<Loading />}>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <SignIn.Step name="start" className="@container">
              <div className="container mx-auto flex-col justify-center align-middle items-center content-center max-w-[545px] px-5">
                <h1 className="font-abel text-center text-[70px]">Sign In</h1>
                <SocialButtons />
                <Divider text="OR" className="my-7.5" />
                <div className="flex flex-col gap-7.5">
                  <ClerkField
                    required
                    name="identifier"
                    label="Email"
                    placeholder="Enter Email"
                    type="text"
                  />

                  <ClerkField
                    required
                    name="password"
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                  />

                  <div className="flex justify-between">
                    <Checkbox label="Remember me" />
                    <SignIn.Action
                      navigate="forgot-password"
                      className="text-link hover:text-link/90 font-semibold hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </SignIn.Action>
                  </div>

                  <SignIn.Action submit asChild disabled={isGlobalLoading}>
                    <Button className="text-sm">
                      <Clerk.Loading>
                        {(isLoading) => (isLoading ? "Submitting..." : " Sign In")}
                      </Clerk.Loading>
                    </Button>
                  </SignIn.Action>

                  <div className="flex justify-center text-center">
                    Don&#8217;t have an account?&nbsp;
                    <Clerk.Link
                      navigate="sign-up"
                      className="text-link hover:text-link! font-semibold hover:underline"
                    >
                      Sign up
                    </Clerk.Link>
                  </div>
                </div>
              </div>
            </SignIn.Step>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
};

export default SignInForm;
