import type { Meta, StoryObj } from "@storybook/nextjs";

import NavBar from ".";
import { NAV_BAR } from "@/constants";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    list: NAV_BAR,
  },
};

export const Active: Story = {
  args: {
    list: NAV_BAR,
    href: NAV_BAR[0].href,
  },
};
