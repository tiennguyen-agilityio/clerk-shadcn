import type { Preview } from "@storybook/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { acme, abel } from "../src/config";
import "../src/themes/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextRouter: {
      Provider: AppRouterContext.Provider,
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
    (Story, context) => (
      <ClerkProvider>
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
      </ClerkProvider>
    ),
  ],
};

export default preview;
