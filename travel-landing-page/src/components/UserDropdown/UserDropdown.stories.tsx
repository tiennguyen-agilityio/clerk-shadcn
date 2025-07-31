import type { Meta, StoryObj } from "@storybook/nextjs";
import { ClerkProvider } from "@clerk/nextjs";

import UserDropdown from ".";

const meta: Meta<typeof UserDropdown> = {
  title: "Components/UserDropdown",
  component: UserDropdown,
  render: () => {
    return (
      <ClerkProvider publishableKey="pk_test_mock">
        <UserDropdown />
      </ClerkProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof UserDropdown>;

export const Default: Story = {
  args: {},
};
