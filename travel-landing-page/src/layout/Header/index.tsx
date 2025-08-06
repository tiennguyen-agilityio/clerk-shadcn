"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

// Constants
import { NAV_BAR } from "@/constants/nav";

// Utils
import { cn } from "@/utils/styles";

// Components
import Logo from "@/components/Logo";
import { Button } from "@/components/ui";
import UserDropdown from "@/components/UserDropdown";
import BookmarkIcon from "@/components/Icons/BookmarkIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import NavigationMenu from "@/components/NavigationMenu";
import { ModalToggleTheme } from "@/themes";
import MiniHeader from "./MiniHeader";

interface HeaderProps {
  hasBorderBottom?: boolean;
}

const Header = ({ hasBorderBottom = false }: HeaderProps) => {
  const pathname = usePathname() || "";
  const isActiveSignIn = pathname.startsWith("/sign-in");
  const isActiveSignUp = pathname.startsWith("/sign-up");

  return (
    <header
      className={cn(
        "w-full absolute z-2",
        hasBorderBottom ? "border-b-1 border-border text-current" : "text-white"
      )}
    >
      <div className="container mx-auto my-5 text-current px-5">
        <div className="hidden h-25 md:flex items-center content-center">
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
            <div className="flex justify-end w-fit min-w-21 ml-1 md:ml-2 lg:ml-5">
              <ClerkLoaded>
                <SignedOut>
                  <div className="flex items-center font-bold text-[13px]">
                    <SignInButton>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn(
                          "p-0 hover:bg-transparent ",
                          isActiveSignIn && "text-primary"
                        )}
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                    /
                    <SignUpButton>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn(
                          "p-0 hover:bg-transparent ",
                          isActiveSignUp && "text-primary"
                        )}
                      >
                        Sign Up
                      </Button>
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
        <div className="md:hidden">
          <MiniHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
