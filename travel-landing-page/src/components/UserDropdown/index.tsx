"use client";

import { useRouter } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/nextjs";
import clsx from "clsx";

import { DIRECTION } from "@/types/svg";
import { USER_DROPDOWNS, USER_DROPDOWNS_LENGTH } from "@/constants/nav";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Avatar from "../Avatar";
import ChevronIcon from "../Icons/ChevronIcon";

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
        <div data-testid="btn-dropdown" className="flex items-center gap-3.5 w-fit">
          <Avatar src={imageUrl || ""} name={displayName} isActive />
          <ChevronIcon direction={DIRECTION.DOWN} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={0} className="w-fit mt-2 p-0 rounded-sm shadow-lg">
        {USER_DROPDOWNS.map(({ text = "", href = "", isSignOut = false }, index) => (
          <DropdownMenuItem
            data-testid="dropdown-menu-item"
            key={index}
            className={clsx(
              "flex flex-col justify-star items-start px-5 py-2.5 hover:rounded-none font-primary",
              index < USER_DROPDOWNS_LENGTH - 1 && "border-b-[1px] rounded-none"
            )}
            onClick={() => handleClick(href, isSignOut)}
          >
            {isSignOut ? <SignOutButton>{text}</SignOutButton> : text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
