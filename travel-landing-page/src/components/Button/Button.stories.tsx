import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";
import { BookmarkIcon } from "../Icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const StartIcon: Story = {
  args: {
    children: (
      <>
        <BookmarkIcon />
        Reservations
      </>
    ),
  },
};
