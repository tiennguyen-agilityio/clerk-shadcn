import type { Meta, StoryObj } from "@storybook/react";

import { MONTHS } from "@/constants";

import Select from ".";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    size: {
      options: ["sm", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Label Select",
    placeholder: "Placeholder",
    list: MONTHS,
  },
};

export const EmptyLabel: Story = {
  args: {
    label: "",
    placeholder: "Placeholder",
    list: MONTHS,
  },
};

export const Disabled: Story = {
  args: {
    label: "Label Select",
    list: MONTHS,
    defaultValue: MONTHS[2],
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    label: "Label Select",
    list: MONTHS,
    size: "sm",
  },
};
