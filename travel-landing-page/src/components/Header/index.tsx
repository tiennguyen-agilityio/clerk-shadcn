"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { NAV_BAR } from "@/constants";

import NavBar from "../NavBar";
import Logo from "../Logo";
import Button from "../Button";
import { BookmarkIcon, SearchIcon } from "../Icons";

const Header = () => {
  const pathname = usePathname() || "";
  const isActiveSignIn = pathname.startsWith("/sign-in");
  const isActiveSignUp = pathname.startsWith("/sign-up");

  return (
    <div className="flex items-center content-center mx-auto h-25 max-w-7xl">
      <Logo className="w-auto" />
      <div className="flex ml-auto mr-0 items-center">
        <NavBar list={NAV_BAR} href={pathname} />
        <Button className="ml-20 mr-4">
          <BookmarkIcon />
          Reservations
        </Button>
        <SearchIcon />
        <div className="flex justify-end min-w-20 ml-5">
          <SignedOut>
            <div className="flex items-center font-acme text-[13px] text-white">
              <SignInButton>
                <span
                  className={`cursor-pointer ${isActiveSignIn ? "text-orange-500" : "text-white"}`}
                >
                  Sign In
                </span>
              </SignInButton>
              /
              <SignUpButton>
                <span
                  className={`cursor-pointer ${isActiveSignUp ? "text-orange-500" : "text-white"}`}
                >
                  Sign Up
                </span>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user/profile"
              appearance={{
                elements: {
                  userButton: "rounded-md border border-gray-300 shadow p-2",
                  userButtonTrigger: "bg-red-200",
                  userButtonOuterIdentifier: "text-white pr-2",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
