"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

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
import HamburgerIcon from "@/components/Icons/HamburgerIcon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      className={cn(
        "w-full absolute z-2 pb-5 md:pb-0",
        hasBorderBottom ? "border-b-1 border-border text-current" : "text-white"
      )}
    >
      <div className="container mx-auto h-25 my-5 text-current px-5">
        <div className="hidden md:flex items-center content-center">
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
                      <span className={cn("cursor-pointer", isActiveSignIn && "text-primary")}>
                        Sign In
                      </span>
                    </SignInButton>
                    /
                    <SignUpButton>
                      <span className={cn("cursor-pointer", isActiveSignUp && "text-primary")}>
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
        <div className="flex md:hidden justify-between items-center ">
          <Logo className="w-auto hover:text-white-500 text-md md:text-xl" />
          <Sheet>
            <SheetTrigger asChild>
              <HamburgerIcon className="cursor-pointer hover:text-primary hover:opacity-80" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="min-w-full h-fit md:hidden justify-center items-center p-5 gap-2"
            >
              {NAV_BAR?.map(({ name, href }, index) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={index}
                    href={href}
                    className={cn(
                      "items-center font-bold rounded-sm p-2 text-sm hover:text-accent-foreground",
                      isActive && "text-primary"
                    )}
                  >
                    <span className={cn(isActive && "text-primary")}>{name}</span>
                    <span
                      className={`w-2 h-2 rounded-full transition-opacity ${
                        isActive ? "opacity-100 bg-primary" : "opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}

              <ClerkLoaded>
                <SignedOut>
                  <SignInButton>
                    <p
                      className={cn(
                        "p-2 text-sm hover:text-accent-foreground cursor-pointer items-center font-bold",
                        isActiveSignIn && "text-primary"
                      )}
                    >
                      Sign In
                    </p>
                  </SignInButton>
                  <SignUpButton>
                    <p
                      className={cn(
                        "p-2 text-sm hover:text-accent-foreground cursor-pointer items-center font-bold",
                        isActiveSignUp && "text-primary"
                      )}
                    >
                      Sign Up
                    </p>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <div className="my-2">
                    <UserDropdown />
                  </div>
                </SignedIn>
              </ClerkLoaded>
              <ModalToggleTheme />
              <Button className="mt-2 xl:ml-20 rounded-[20px] font-bold" size="sm">
                <BookmarkIcon />
                Reservations
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
