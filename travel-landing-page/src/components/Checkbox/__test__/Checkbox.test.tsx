import { render } from "@testing-library/react";

import Checkbox from "..";

describe("Checkbox component", () => {
  const props = {
    label: "Label checkbox",
  };
  it("should render correctly", () => {
    const { container } = render(<Checkbox {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with disabled true", () => {
    const { container } = render(<Checkbox {...props} disabled />);
    expect(container).toMatchSnapshot();
  });

  it("should render with label empty", () => {
    const { container } = render(<Checkbox />);
    expect(container).toMatchSnapshot();
  });

  it("should render with size large", () => {
    const { container } = render(<Checkbox {...props} size="lg" />);
    expect(container).toMatchSnapshot();
  });
});
