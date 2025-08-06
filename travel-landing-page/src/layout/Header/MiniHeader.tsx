"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClerkLoaded, SignedIn, SignedOut } from "@clerk/nextjs";

// Constants
import { NAV_BAR } from "@/constants/nav";
import { ROUTES } from "@/constants/routes";

// Utils
import { cn } from "@/utils/styles";

// Components
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import UserDropdown from "@/components/UserDropdown";
import BookmarkIcon from "@/components/Icons/BookmarkIcon";
import HamburgerIcon from "@/components/Icons/HamburgerIcon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModalToggleTheme } from "@/themes";

const MiniHeader = () => {
  const pathname = usePathname() || "";
  const isActiveSignIn = pathname.startsWith("/sign-in");
  const isActiveSignUp = pathname.startsWith("/sign-up");

  const [open, setOpen] = useState(false);

  const handleToggleSheet = useCallback((value: boolean) => {
    setOpen(value);
  }, []);

  const handleCloseSheet = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="flex h-20 md:hidden justify-between items-center">
      <Logo className="w-auto hover:text-white-500 text-md md:text-xl" />
      <Sheet open={open} onOpenChange={handleToggleSheet}>
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
                onClick={handleCloseSheet}
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
              <Link
                href={ROUTES.SIGN_IN}
                onClick={handleCloseSheet}
                className={cn(
                  "items-center font-bold rounded-sm p-2 text-sm hover:text-accent-foreground",
                  isActiveSignIn && "text-primary"
                )}
              >
                Sign In
              </Link>
              <Link
                href={ROUTES.SIGN_UP}
                onClick={handleCloseSheet}
                className={cn(
                  "items-center font-bold rounded-sm p-2 text-sm hover:text-accent-foreground",
                  isActiveSignUp && "text-primary"
                )}
              >
                Sign Up
              </Link>
            </SignedOut>
            <SignedIn>
              <div className="my-2">
                <UserDropdown />
              </div>
            </SignedIn>
          </ClerkLoaded>
          <ModalToggleTheme onChange={handleCloseSheet} />
          <Button
            onClick={handleCloseSheet}
            className="mt-2 xl:ml-20 rounded-[20px] font-bold"
            size="sm"
          >
            <BookmarkIcon />
            Reservations
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MiniHeader;
