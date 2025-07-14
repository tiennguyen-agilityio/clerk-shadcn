"use client";

import { useState } from "react";
import { Button, FacebookIcon, GoogleIcon, Loading } from "@/components";
import * as SignIn from "@clerk/elements/sign-in";
import * as Clerk from "@clerk/elements/common";

const SignInPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisible = () => setIsPasswordVisible((prev) => !prev);

  return (
    <div className="font-acme text-sm">
      <SignIn.Root fallback={<Loading />}>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <SignIn.Step name="start">
              <div className="flex-col justify-center align-middle items-center content-center w-[545px]">
                <h1 className="font-abel text-center text-[70px]">Sign In</h1>
                <div className="flex justify-between mt-12.5 h-12.5 gap-2.5 text-white">
                  <Clerk.Connection asChild name="facebook">
                    <Button className="gap-2.5 w-1/2  bg-[#3b5998] hover:bg-blue-900 transition-colors duration-300">
                      <FacebookIcon />
                      <div className="border-l-[1px] h-5 border-foreground" />
                      <Clerk.Loading scope="provider:facebook">
                        {(isLoading) => (isLoading ? "Loading..." : "Sign in with Facebook")}
                      </Clerk.Loading>
                    </Button>
                  </Clerk.Connection>
                  <Clerk.Connection asChild name="google">
                    <Button className=" gap-2.5 w-1/2 bg-[#db3236] hover:bg-red-700 transition-colors duration-300">
                      <GoogleIcon />
                      <div className="border-l-[1px] h-5 border-foreground" />
                      <Clerk.Loading scope="provider:google">
                        {(isLoading) => (isLoading ? "Loading..." : "Sign in with Google")}
                      </Clerk.Loading>
                    </Button>
                  </Clerk.Connection>
                </div>

                <div className="flex flex-col gap-7.5">
                  <div className="flex flex-col justify-center items-center h-10 relative pt-5">
                    <div className="h-[1px] bg-[#d8d8d8] absolute z-1 w-full" />
                    <span className="flex items-center h-2.5 px-3 bg-white z-2">OR</span>
                  </div>

                  <Clerk.Field name="identifier">
                    <Clerk.Label className="mb-1.25">Email</Clerk.Label>
                    <Clerk.Input
                      required
                      type="text"
                      placeholder="Enter Email"
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    <Clerk.FieldError className="text-red-500" />
                  </Clerk.Field>

                  <Clerk.Field name="password">
                    <Clerk.Label>Password</Clerk.Label>
                    <div className="relative">
                      <Clerk.Input
                        type={isPasswordVisible ? "text" : "password"}
                        required
                        validatePassword
                        placeholder="Enter password"
                        className="w-full rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                      <Button
                        variant="ghost"
                        className="absolute right-3 h-full px-1 text-[#4a90e2] hover:text-blue-900 hover:bg-transparent"
                        onClick={handleToggleVisible}
                      >
                        {isPasswordVisible ? "Hide Password" : "Show Password"}
                      </Button>
                    </div>
                    <Clerk.FieldError className="text-red-500" />
                  </Clerk.Field>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2.5">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">Remember me</label>
                    </div>

                    <SignIn.Action
                      navigate="forgot-password"
                      className="text-[#4a90e2] hover:text-blue-900 hover:underline"
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

                  <div className="flex justify-center text-center gap">
                    Don&#8217;t have an account?&nbsp;
                    <Clerk.Link
                      navigate="sign-up"
                      className="text-[#4a90e2] hover:text-blue-900 hover:underline"
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

export default SignInPage;
