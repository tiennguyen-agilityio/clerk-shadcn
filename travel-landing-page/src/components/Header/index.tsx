"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { NAV_BAR } from "@/constants";
import NavBar from "../NavBar";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <NavBar list={NAV_BAR} href={pathname} />
    </>
  );
};

export default Header;
