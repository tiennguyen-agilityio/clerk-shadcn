import { render } from "@testing-library/react";

import Button from "..";

describe("Button component", () => {
  const props = {
    children: "Default",
  };

  it("should render correctly", () => {
    const { container } = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });
});
