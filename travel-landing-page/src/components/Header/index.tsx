"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  // UserButton,
} from "@clerk/nextjs";
import clsx from "clsx";

import { NAV_BAR } from "@/constants/nav";

import NavBar from "../NavBar";
import Logo from "../Logo";
import { Button } from "../ui";
import UserDropdown from "../UserDropdown";
import BookmarkIcon from "../Icons/BookmarkIcon";
import SearchIcon from "../Icons/SearchIcon";

import { ModalToggleTheme } from "@/themes";

const HAS_BORDER_BOTTOM = ["/sign-in", "/sign-up", "/wait-list", "/user/profile"];

const Header = () => {
  const pathname = usePathname() || "";
  const isActiveSignIn = pathname.startsWith("/sign-in");
  const isActiveSignUp = pathname.startsWith("/sign-up");
  const isHasBorder = HAS_BORDER_BOTTOM.some((prefix) => pathname.startsWith(prefix));

  return (
    <header
      className={clsx(
        "w-full absolute z-2 text-accent",
        isHasBorder && "border-b-1 border-border",
        isHasBorder ? "text-foreground" : "text-white"
      )}
    >
      <div className="container flex items-center content-center mx-auto h-25">
        <Logo className="w-auto hover:text-white-500" />
        <div className="flex ml-auto mr-0 items-center">
          <NavBar list={NAV_BAR} href={pathname} />
          <ModalToggleTheme />
          <Button className="ml-20 mr-4 rounded-[20px] text-white" size="sm">
            <BookmarkIcon />
            Reservations
          </Button>
          <SearchIcon />
          <div className="flex justify-end w-20 min-w-20 ml-5">
            <ClerkLoaded>
              <SignedOut>
                <div className="flex items-center font-acme text-[13px]">
                  <SignInButton>
                    <span className={clsx("cursor-pointer", isActiveSignIn && "text-primary")}>
                      Sign In
                    </span>
                  </SignInButton>
                  /
                  <SignUpButton>
                    <span className={clsx("cursor-pointer", isActiveSignUp && "text-primary")}>
                      Sign Up
                    </span>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <UserDropdown />
                {/* <UserButton
                  userProfileMode="navigation"
                  userProfileUrl="/user/profile"
                  appearance={{
                    elements: {
                      userButton: "rounded-md border border-gray-300 shadow p-2",
                      userButtonTrigger: "bg-red-200",
                      userButtonOuterIdentifier: "text-white pr-2",
                    },
                  }}
                /> */}
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
