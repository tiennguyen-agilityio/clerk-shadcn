import type { Meta, StoryObj } from "@storybook/react";

import Logo from ".";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const LogoFooter: Story = {
  args: {
    className: "text-[#30797c]",
  },
};
