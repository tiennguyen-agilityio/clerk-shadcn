"use client";

import { useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  useEffect(() => {
    const updateFeedback = () => {
      document.querySelectorAll("input").forEach((input) => {
        if (input.validity.valid) {
          input.setAttribute("data-feedback", "info");
          input.setAttribute("aria-invalid", "false");
        } else {
          input.setAttribute("data-feedback", "error");
          input.setAttribute("aria-invalid", "true");
        }
      });
    };

    document.addEventListener("input", updateFeedback);
    document.addEventListener("blur", updateFeedback, true);

    return () => {
      document.removeEventListener("input", updateFeedback);
      document.removeEventListener("blur", updateFeedback, true);
    };
  }, []);

  return (
    <SignIn
      appearance={{
        elements: {
          // formButtonPrimary: {
          // 	height: "55px",
          // },
          formButtonPrimary: "bg-slate-500 hover:bg-slate-400 text-sm",
        },
      }}
      fallback={<div className="bg-red-50"> Loading</div>}
      // oauthFlow="redirect"
      // path="/sign-in"
    />
  );
};

export default SignInPage;
