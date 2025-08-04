"use client";

import React, { ReactNode } from "react";

import { useSessionWatcher } from "@/hooks/useSessionWatcher";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  hasBorderBottomHeader?: boolean;
}

const Layout = ({ children, hasBorderBottomHeader = false }: LayoutProps) => {
  useSessionWatcher();
  return (
    <div>
      <Header hasBorderBottom={hasBorderBottomHeader} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
