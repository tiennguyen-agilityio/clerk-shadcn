import type { Meta, StoryObj } from "@storybook/react";

import ExperienceItem from ".";

const meta: Meta<typeof ExperienceItem> = {
  title: "Components/ExperienceItem",
  component: ExperienceItem,
};

export default meta;
type Story = StoryObj<typeof ExperienceItem>;

export const Default: Story = {
  args: {
    label: "Check out",
    title: "Top Camping Sites",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Top Camping Sites",
  },
};
