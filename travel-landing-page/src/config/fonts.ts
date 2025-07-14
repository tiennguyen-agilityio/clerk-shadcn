import { Abel, Acme } from "next/font/google";

export const acme = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-primary",
});

export const abel = Abel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
});
