import { render } from "@testing-library/react";

import ExperienceItem from "..";

describe("ExperienceItem component", () => {
  const props = {
    label: "Check out",
    title: "Top Camping Sites",
  };

  it("should render correctly", () => {
    const { container } = render(<ExperienceItem {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with only title", () => {
    const { container } = render(<ExperienceItem title="Top Camping Sites" />);
    expect(container).toMatchSnapshot();
  });
});
