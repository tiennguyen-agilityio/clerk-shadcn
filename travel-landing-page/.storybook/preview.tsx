import type { Preview } from "@storybook/nextjs";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { acme, abel } from "../src/config";
import "../src/app/globals.css";

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
      <div className={`${acme.variable} ${abel.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
