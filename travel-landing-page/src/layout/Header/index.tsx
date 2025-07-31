"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import clsx from "clsx";

import { NAV_BAR } from "@/constants/nav";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui";
import UserDropdown from "@/components/UserDropdown";
import BookmarkIcon from "@/components/Icons/BookmarkIcon";
import SearchIcon from "@/components/Icons/SearchIcon";

import { ModalToggleTheme } from "@/themes";
import NavigationMenu from "@/components/NavigationMenu";

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
        "w-full absolute z-2 pb-5 md:pb-0",
        hasBorderBottom ? "border-b-1 border-border text-current" : "text-white"
      )}
    >
      <div className="container flex flex-col md:flex-row items-center content-center mx-auto h-25 my-5 text-current px-5">
        <div className="w-full flex justify-between items-center">
          <Logo className="w-auto hover:text-white-500 text-md md:text-xl" />
          <NavigationMenu list={NAV_BAR} path={pathname} />
        </div>
        <div className="w-full flex justify-between items-center md:w-auto md:flex-end lg:ml-5 gap-2 md:gap-3 lg:gap-5">
          <ModalToggleTheme />
          <Button className="xl:ml-20 rounded-[20px] font-bold" size="sm">
            <BookmarkIcon />
            Reservations
          </Button>
          <SearchIcon />
          <div className="flex justify-end w-fit min-w-20 ml-1 md:ml-2 lg:ml-5">
            <ClerkLoaded>
              <SignedOut>
                <div className="flex items-center font-bold text-[13px]">
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

        {/* <div className="flex flex-col lg:flex-row ml-auto mr-0 items-center justify-center gap-2 md:gap-3 lg:gap-5">
					<div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-5">
						<ModalToggleTheme />
						<Button className="lg:ml-20 rounded-[20px] font-bold text-white" size="sm">
							<BookmarkIcon />
							Reservations
						</Button>
						<SearchIcon />
					</div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
