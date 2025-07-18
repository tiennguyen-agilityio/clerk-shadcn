import type { Meta, StoryObj } from "@storybook/react";

import { EXPERIENCES } from "@/constants";

import Experiences from ".";

const meta: Meta<typeof Experiences> = {
  title: "Components/Experiences",
  component: Experiences,
};

export default meta;

type Story = StoryObj<typeof Experiences>;

export const Default: Story = {
  args: {
    list: EXPERIENCES,
    onChange: () => alert("This is an alert message!"),
  },
};
