import { useEffect } from "react";
import type { Preview } from "@storybook/nextjs";
import { ThemeProvider } from "next-themes";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { acme, abel } from "../src/config";
import "../src/themes/theme.css";

const mockRouter: AppRouterInstance = {
  push: async () => true,
  replace: async () => true,
  refresh: () => {},
  forward: () => {},
  back: () => {},
  prefetch: async () => {},
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        showName: true,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      useEffect(() => {
        document.documentElement.classList.add(acme.variable, abel.variable);
      }, []);

      return (
        <AppRouterContext.Provider value={mockRouter}>
          <ThemeProvider
            attribute="class"
            defaultTheme={context.globals.theme || "light"}
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className={`${acme.variable} ${abel.variable} antialiased`}>
              <Story />
            </div>
          </ThemeProvider>
        </AppRouterContext.Provider>
      );
    },
  ],
};

export default preview;
