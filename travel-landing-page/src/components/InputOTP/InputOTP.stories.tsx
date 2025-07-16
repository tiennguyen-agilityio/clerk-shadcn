import type { Meta, StoryObj } from "@storybook/react";

import InputOTP from ".";

const meta: Meta<typeof InputOTP> = {
  title: "Components/InputOTP",
  component: InputOTP,
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    maxLength: 6,
  },
};

export const Disabled: Story = {
  args: {
    maxLength: 6,
    disabled: true,
  },
};
