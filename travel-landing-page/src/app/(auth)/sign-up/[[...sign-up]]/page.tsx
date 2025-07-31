"use client";

import { useState } from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

import { DAYS, MONTHS, YEARS } from "@/constants";

import Button from "@/components/Button";
import Loading from "@/components/Loading";
import Checkbox from "@/components/Checkbox";
import Select from "@/components/Select";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import GoogleIcon from "@/components/Icons/GoogleIcon";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleToggleVisible = () => setIsPasswordVisible((prev) => !prev);

  const handleDayChange = (value: string) => {
    setDay(value);
  };

  const handleMonthChange = (value: string) => {
    setMonth(value);
  };

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  return (
    <div className="container text-sm justify-center mx-auto px-2 md:px-5">
      <SignUp.Root fallback={<Loading />}>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <div className="@container flex-col justify-center items-center content-center md:min-w-[545px]">
              <SignUp.Step name="start" className="w-full">
                <h1 className="font-abel text-center text-[70px]">Sign Up</h1>

                <div className="flex flex-col @md:flex-row justify-between mt-12.5 gap-1.5 @md:gap-2.5">
                  <Clerk.Connection asChild name="facebook">
                    <Button className="gap-2.5 @md:flex-1/2 bg-facebook hover:bg-facebook/75 transition-colors duration-300">
                      <FacebookIcon />
                      <div className="border-l-[1px] h-5 border-foreground" />
                      <Clerk.Loading scope="provider:facebook">
                        {(isLoading) => (
                          <>
                            Sign in with Facebook
                            {isLoading && (
                              <Loading iconOnly iconClassName="size-6!" wrapperClassName="w-fit!" />
                            )}
                          </>
                        )}
                      </Clerk.Loading>
                    </Button>
                  </Clerk.Connection>
                  <Clerk.Connection asChild name="google">
                    <Button className=" gap-2.5 @md:flex-1/2 bg-google hover:bg-google/75 transition-colors duration-300">
                      <GoogleIcon />
                      <div className="border-l-[1px] h-5 border-foreground" />
                      <Clerk.Loading scope="provider:google">
                        {(isLoading) => (
                          <>
                            Sign in with Google
                            {isLoading && (
                              <Loading iconOnly iconClassName="size-6!" wrapperClassName="w-fit!" />
                            )}
                          </>
                        )}
                      </Clerk.Loading>
                    </Button>
                  </Clerk.Connection>
                </div>
                <SignUp.Captcha className="mt-5 text-center" />
                <div className="flex flex-col gap-7.5">
                  <div className="flex flex-col justify-center items-center h-10 relative pt-5">
                    <div className="h-[1px] bg-input absolute z-1 w-full" />
                    <span className="flex items-center h-2.5 px-3 bg-background z-2">OR</span>
                  </div>

                  <div className="flex gap-5">
                    <Clerk.Field name="firstName" className="w-1/2">
                      <Clerk.Label className="mb-1.25">First Name</Clerk.Label>
                      <Clerk.Input
                        required
                        placeholder="Enter first name"
                        className="w-full rounded border border-input p-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary data-[invalid]:ring-error"
                      />
                      <Clerk.FieldError className="text-error" />
                    </Clerk.Field>

                    <Clerk.Field name="lastName" className="w-1/2">
                      <Clerk.Label className="mb-1.25">Last Name</Clerk.Label>
                      <Clerk.Input
                        required
                        placeholder="Enter last name"
                        className="w-full rounded border border-input p-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary data-[invalid]:ring-error"
                      />
                      <Clerk.FieldError className="text-error" />
                    </Clerk.Field>
                  </div>
                  <Clerk.Field name="emailAddress">
                    <Clerk.Label className="mb-1.25">Email</Clerk.Label>
                    <Clerk.Input
                      required
                      type="text"
                      placeholder="Enter Email"
                      className="w-full rounded border border-input p-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary data-[invalid]:ring-error"
                    />
                    <Clerk.FieldError className="text-error" />
                  </Clerk.Field>

                  <Clerk.Field name="password">
                    <Clerk.Label className="mb-1.25">Password</Clerk.Label>
                    <div className="relative">
                      <Clerk.Input
                        type={isPasswordVisible ? "text" : "password"}
                        required
                        validatePassword
                        placeholder="Enter Password"
                        className="w-full rounded border border-input p-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary data-[invalid]:ring-error"
                      />
                      <Button
                        variant="ghost"
                        className="absolute right-3 h-full px-1 text-link hover:text-link/80 hover:bg-transparent"
                        onClick={handleToggleVisible}
                      >
                        {isPasswordVisible ? "Hide Password" : "Show Password"}
                      </Button>
                    </div>
                    <Clerk.FieldError className="block text-sm text-error" />
                  </Clerk.Field>

                  <div className="flex flex-col space-y-2">
                    <label className="mb-1.25">Date of Birth</label>
                    <div className="flex gap-5">
                      <Select
                        placeholder="Day"
                        value={day}
                        options={DAYS}
                        onValueChange={handleDayChange}
                      />

                      <Select
                        placeholder="Month"
                        value={month}
                        options={MONTHS}
                        onValueChange={handleMonthChange}
                      />

                      <Select
                        placeholder="Year"
                        value={year}
                        options={YEARS}
                        onValueChange={handleYearChange}
                      />
                    </div>
                  </div>

                  <Checkbox label="I have read and agree to the Terms and Conditions" />

                  <Clerk.GlobalError className="block text-sm text-error" />

                  <SignUp.Action submit asChild disabled={isGlobalLoading}>
                    <Button className="text-sm" disabled={isGlobalLoading}>
                      <Clerk.Loading>
                        {(isLoading) => (isLoading ? "Submitting..." : " Sign Up")}
                      </Clerk.Loading>
                    </Button>
                  </SignUp.Action>
                  <div className="flex justify-center text-center gap">
                    Already have an Account?&nbsp;
                    <Clerk.Link
                      navigate="sign-in"
                      className="text-link hover:text-link/80! font-semibold hover:underline"
                    >
                      Sign In
                    </Clerk.Link>
                  </div>
                </div>
              </SignUp.Step>
              <SignUp.Step name="verifications" className="w-full">
                <h1 className="font-abel text-center text-[70px]">Verify email code</h1>
                <div className="w-full flex flex-col gap-7.5">
                  <SignUp.Strategy name="email_code">
                    <Clerk.Field name="code" className="space-y-2">
                      <Clerk.Label className="text-sm font-medium text-zinc-950">
                        Email code
                      </Clerk.Label>
                      <Clerk.Input
                        type="otp"
                        required
                        className="w-full rounded border border-input p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary data-[invalid]:ring-error"
                      />
                      <Clerk.FieldError className="block text-sm text-error" />
                    </Clerk.Field>

                    <Clerk.GlobalError className="block text-sm text-error" />
                    <SignUp.Action submit asChild disabled={isGlobalLoading}>
                      <Button className="text-sm" disabled={isGlobalLoading}>
                        <Clerk.Loading>
                          {(isLoading) => (isLoading ? "Submitting..." : " Verify")}
                        </Clerk.Loading>
                      </Button>
                    </SignUp.Action>
                  </SignUp.Strategy>

                  <div className="flex justify-center text-center gap">
                    Already have an Account?&nbsp;
                    <Clerk.Link
                      navigate="sign-in"
                      className="text-link hover:text-link/80! font-semibold hover:underline"
                    >
                      Sign In
                    </Clerk.Link>
                  </div>
                </div>
              </SignUp.Step>
              <SignUp.Step name="continue" className="w-full">
                <h1 className="font-abel text-center text-[70px]">Continue registration</h1>
                <div className="w-full flex flex-col mt-12.5 gap-7.5">
                  <Clerk.Field name="username" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-zinc-950">
                      Username
                    </Clerk.Label>
                    <Clerk.Input
                      type="text"
                      required
                      className="w-full rounded border border-input p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary data-[invalid]:ring-error"
                    />
                    <Clerk.FieldError className="block text-sm text-error" />
                  </Clerk.Field>

                  <Clerk.GlobalError className="block text-sm text-error" />

                  <SignUp.Action submit asChild disabled={isGlobalLoading}>
                    <Button className="text-sm" disabled={isGlobalLoading}>
                      <Clerk.Loading>
                        {(isLoading) => (isLoading ? "Submitting..." : " Continue")}
                      </Clerk.Loading>
                    </Button>
                  </SignUp.Action>

                  <div className="flex justify-center text-center gap">
                    Already have an Account?&nbsp;
                    <Clerk.Link
                      navigate="sign-in"
                      className="text-link hover:text-link/80! font-semibold hover:underline"
                    >
                      Log In
                    </Clerk.Link>
                  </div>
                </div>
              </SignUp.Step>
            </div>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
};

export default SignUpPage;
