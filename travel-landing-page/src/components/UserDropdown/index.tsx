"use client";

import { useRouter } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Fragment } from "react";

import { DIRECTION } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Avatar from "../Avatar";
import ChevronIcon from "../Icons/ChevronIcon";
import { Separator } from "../ui/separator";

const DROPDOWN_MENUS = [
  {
    text: "Profile",
    href: "/user/profile",
  },
  {
    text: "Favorites",
    href: "/",
  },
  {
    text: "Notifications",
    href: "/",
  },
  {
    text: "My Reservations",
    href: "/",
  },
  {
    text: "Sign out",
    href: "/",
    isSignOut: true,
  },
];

const menuLength = DROPDOWN_MENUS?.length;

const UserDropdown = () => {
  const router = useRouter();
  const { user } = useUser();

  const { imageUrl = "", firstName = "", lastName = "" } = user || {};

  const displayName = `${firstName?.trim().charAt(0)}${lastName?.trim().charAt(0)}`;

  const handleClick = (href = "", isSignOut = false) => {
    if (isSignOut) {
      return;
    }

    return router.push(href);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3.5 w-35">
          <Avatar src={imageUrl || ""} name={displayName} isActive />
          <ChevronIcon direction={DIRECTION.DOWN} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={0} className="w-35 mt-2 rounded-sm shadow-lg">
        {DROPDOWN_MENUS.map(({ text = "", href = "", isSignOut = false }, index) => (
          <Fragment key={index}>
            <DropdownMenuItem
              className="pl-5 pt-3.5 pb-1.5 hover:rounded-none"
              onClick={() => handleClick(href, isSignOut)}
            >
              {isSignOut ? <SignOutButton>{text}</SignOutButton> : text}
            </DropdownMenuItem>
            {index < menuLength - 1 && <Separator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
