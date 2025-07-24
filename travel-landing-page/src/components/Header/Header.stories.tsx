import type { Meta, StoryObj } from "@storybook/nextjs";

import Header from ".";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  render: () => (
    <div className="w-full h-25">
      <Header />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
