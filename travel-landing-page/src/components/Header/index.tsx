"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import clsx from "clsx";

import { NAV_BAR } from "@/constants";

import NavBar from "../NavBar";
import Logo from "../Logo";
import Button from "../Button";
import { BookmarkIcon, SearchIcon } from "../Icons";

const Header = () => {
  const pathname = usePathname() || "";
  const isActiveSignIn = pathname.startsWith("/sign-in");
  const isActiveSignUp = pathname.startsWith("/sign-up");
  const isHasBorder = ["/sign-in", "/sign-up"].includes(pathname);

  return (
    <header className={clsx("w-full", isHasBorder && "border-b-1 border-[#d8d8d8]")}>
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
              <div className="flex items-center font-acme text-[13px]">
                <SignInButton>
                  <span className={clsx("cursor-pointer", isActiveSignIn && "text-orange-500")}>
                    Sign In
                  </span>
                </SignInButton>
                /
                <SignUpButton>
                  <span className={clsx("cursor-pointer", isActiveSignUp && "text-orange-500")}>
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
    </header>
  );
};

export default Header;
