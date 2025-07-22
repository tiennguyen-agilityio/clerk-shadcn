"use client";

import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

import { DAYS, MONTHS, YEARS } from "@/constants";
import { Button, FacebookIcon, GoogleIcon, Loading } from "@/components";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleToggleVisible = () => setIsPasswordVisible((prev) => !prev);

  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  return (
    <div className="font-acme text-sm">
      <SignUp.Root fallback={<Loading />}>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <div className="flex-col justify-center items-center content-center w-[545px]">
              <SignUp.Step name="start" className="w-full">
                <h1 className="font-abel text-center text-[70px]">Create Account</h1>

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

                  <div className="flex gap-5">
                    <Clerk.Field name="firstName" className="w-1/2">
                      <Clerk.Label className="mb-1.25">First Name</Clerk.Label>
                      <Clerk.Input
                        required
                        placeholder="Enter first name"
                        className="w-full rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                      <Clerk.FieldError className="text-red-500" />
                    </Clerk.Field>

                    <Clerk.Field name="lastName" className="w-1/2">
                      <Clerk.Label className="mb-1.25">Last Name</Clerk.Label>
                      <Clerk.Input
                        required
                        placeholder="Enter last name"
                        className="w-full rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                      <Clerk.FieldError className="text-red-500" />
                    </Clerk.Field>
                  </div>
                  <Clerk.Field name="emailAddress">
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
                    <Clerk.Label className="mb-1.25">Password</Clerk.Label>
                    <div className="relative">
                      <Clerk.Input
                        type={isPasswordVisible ? "text" : "password"}
                        required
                        validatePassword
                        placeholder="Enter Password"
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
                    <Clerk.FieldError className="block text-sm text-red-400" />
                  </Clerk.Field>

                  <div className="flex flex-col space-y-2">
                    <label className="mb-1.25">Date of Birth</label>
                    <div className="flex gap-5">
                      {/* Day */}
                      <select
                        value={day}
                        onChange={handleDayChange}
                        className={clsx(
                          "w-1/3 rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500",
                          !day && "text-gray-400"
                        )}
                      >
                        <option value="">Day</option>
                        {DAYS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>

                      {/* Month */}
                      <select
                        value={month}
                        onChange={handleMonthChange}
                        className={clsx(
                          "w-1/3 rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500",
                          !month && "text-gray-400"
                        )}
                      >
                        <option value="">Month</option>
                        {MONTHS.map((m, index) => (
                          <option key={index} value={index + 1}>
                            {m}
                          </option>
                        ))}
                      </select>

                      {/* Year */}
                      <select
                        value={year}
                        onChange={handleYearChange}
                        className={clsx(
                          "w-1/3 rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500",
                          !year && "text-gray-400"
                        )}
                      >
                        <option value="">Year</option>
                        {YEARS.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember">
                      I have read and agree to the Terms and Conditions
                    </label>
                  </div>

                  <SignUp.Captcha />
                  <Clerk.GlobalError className="block text-sm text-red-400" />

                  <SignUp.Action submit asChild disabled={isGlobalLoading}>
                    <Button className="text-sm">
                      <Clerk.Loading>
                        {(isLoading) => (isLoading ? "Submitting..." : " Sign Up")}
                      </Clerk.Loading>
                    </Button>
                  </SignUp.Action>
                  <div className="flex justify-center text-center gap">
                    Already have an Account?&nbsp;
                    <Clerk.Link
                      navigate="sign-in"
                      className="text-[#4a90e2] hover:text-blue-900 hover:underline"
                    >
                      Sign In
                    </Clerk.Link>
                  </div>
                </div>
              </SignUp.Step>
              <SignUp.Step
                name="verifications"
                className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
              >
                <h1 className="font-abel text-center text-[70px] text-black">Verify email code</h1>
                <div className="flex flex-col gap-7.5">
                  <SignUp.Strategy name="email_code">
                    <Clerk.Field name="code" className="space-y-2">
                      <Clerk.Label className="text-sm font-medium text-zinc-950">
                        Email code
                      </Clerk.Label>
                      <Clerk.Input
                        type="otp"
                        required
                        className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                      />
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>

                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <SignUp.Action submit asChild disabled={isGlobalLoading}>
                      <Button className="text-sm">
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
                      className="text-[#4a90e2] hover:text-blue-900 hover:underline"
                    >
                      Sign In
                    </Clerk.Link>
                  </div>
                </div>
              </SignUp.Step>
              <SignUp.Step
                name="continue"
                className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
              >
                <h1 className="font-abel text-center text-[70px] text-black">
                  Continue registration
                </h1>
                <div className="flex flex-col gap-7.5">
                  <Clerk.Field name="username" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-zinc-950">
                      Username
                    </Clerk.Label>
                    <Clerk.Input
                      type="text"
                      required
                      className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                    />
                    <Clerk.FieldError className="block text-sm text-red-400" />
                  </Clerk.Field>

                  <Clerk.GlobalError className="block text-sm text-red-400" />

                  <SignUp.Action submit asChild disabled={isGlobalLoading}>
                    <Button className="text-sm">
                      <Clerk.Loading>
                        {(isLoading) => (isLoading ? "Submitting..." : " Continue")}
                      </Clerk.Loading>
                    </Button>
                  </SignUp.Action>

                  <div className="flex justify-center text-center gap">
                    Already have an Account?&nbsp;
                    <Clerk.Link
                      navigate="sign-in"
                      className="text-[#4a90e2] hover:text-blue-900 hover:underline"
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
