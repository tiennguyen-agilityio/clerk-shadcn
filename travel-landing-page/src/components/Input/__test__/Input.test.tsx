import { render } from "@testing-library/react";

import Input from "..";

describe("Input component", () => {
  const props = {
    label: "Label Input",
  };
  it("should render default", () => {
    const { container } = render(<Input {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with empty label", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
