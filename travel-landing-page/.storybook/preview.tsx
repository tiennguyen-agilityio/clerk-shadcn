import { useEffect } from "react";
import type { Preview } from "@storybook/nextjs";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { cn } from "../src/utils/styles";
import { abel } from "../src/config";
import { ThemeProvider } from "../src/themes/ThemeProvider";
import "../src/themes/theme.css";

const mockRouter: AppRouterInstance = {
  push: async () => true,
  replace: async () => true,
  refresh: () => {},
  forward: () => {},
  back: () => {},
  prefetch: async () => {},
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", icon: "circle", title: "Light" },
        { value: "dark", icon: "circle", title: "Dark" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";

      useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
      }, [theme]);

      return (
        <AppRouterContext.Provider value={mockRouter}>
          <ThemeProvider
            attribute="class"
            defaultTheme={theme}
            enableSystem={true}
            disableTransitionOnChange
          >
            <div className={cn("antialiased", abel.variable)}>
              <Story />
            </div>
          </ThemeProvider>
        </AppRouterContext.Provider>
      );
    },
  ],
};

export default preview;
