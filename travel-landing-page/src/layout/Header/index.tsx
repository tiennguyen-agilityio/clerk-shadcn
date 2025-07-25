"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import clsx from "clsx";

import { NAV_BAR } from "@/constants/nav";

import NavBar from "@/components/NavBar";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui";
import UserDropdown from "@/components/UserDropdown";
import BookmarkIcon from "@/components/Icons/BookmarkIcon";
import SearchIcon from "@/components/Icons/SearchIcon";

import { ModalToggleTheme } from "@/themes";

interface HeaderProps {
  hasBorderBottom?: boolean;
}

const Header = ({ hasBorderBottom = false }: HeaderProps) => {
  const pathname = usePathname() || "";
  const isActiveSignIn = pathname.startsWith("/sign-in");
  const isActiveSignUp = pathname.startsWith("/sign-up");

  return (
    <header
      className={clsx(
        "w-full absolute z-2",
        hasBorderBottom ? "border-b-1 border-border text-current" : "text-white"
      )}
    >
      <div className="container flex items-center content-center mx-auto h-25 text-current">
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
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
