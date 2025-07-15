import type { Meta, StoryObj } from "@storybook/react";

import LocationCard from ".";
import { LOCATIONS } from "@/mocks";

const meta: Meta<typeof LocationCard> = {
  title: "Components/LocationCard",
  component: LocationCard,
};

export default meta;

type Story = StoryObj<typeof LocationCard>;

export const Default: Story = {
  args: {
    item: LOCATIONS[0],
    href: "",
  },
  render: (props) => (
    <div className="w-[356px]">
      <LocationCard {...props} />
    </div>
  ),
};
