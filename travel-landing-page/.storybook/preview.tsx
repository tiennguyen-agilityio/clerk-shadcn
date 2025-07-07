import type { Preview } from "@storybook/nextjs";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { acme, abel } from "../src/config";
import "../src/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ClerkProvider>
        <div className={`${acme.variable} ${abel.variable}`}>
          <Story />
        </div>
      </ClerkProvider>
    ),
  ],
};

export default preview;
