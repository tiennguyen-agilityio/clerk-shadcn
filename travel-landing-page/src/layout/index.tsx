import Footer from "./Footer";
import Header from "./Header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  hasBorderBottomHeader?: boolean;
}

const Layout = ({ children, hasBorderBottomHeader = false }: LayoutProps) => {
  return (
    <div>
      <Header hasBorderBottom={hasBorderBottomHeader} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
