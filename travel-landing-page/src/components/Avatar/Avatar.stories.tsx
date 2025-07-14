import type { Meta, StoryObj } from "@storybook/react";

import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ["default", "lg"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    name: "TN",
  },
};

export const Activity: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    name: "TN",
    isNewActivity: true,
  },
};

export const Fallback: Story = {
  args: {
    name: "TN",
  },
};

export const FallbackActivity: Story = {
  args: {
    name: "TN",
    isNewActivity: true,
  },
};

export const SizeLarge: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    name: "TN",
    size: "lg",
  },
};
