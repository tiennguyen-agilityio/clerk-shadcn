import { render } from "@testing-library/react";

import Select from "..";
import { MONTHS } from "@/constants";

describe("Select component", () => {
  const props = {
    label: "Label Select",
    placeholder: "Placeholder",
    options: MONTHS,
  };
  it("should render correctly", () => {
    const { container } = render(<Select {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with disabled true", () => {
    const { container } = render(<Select {...props} defaultValue={MONTHS[0]} disabled />);
    expect(container).toMatchSnapshot();
  });

  it("should render with label empty", () => {
    const { container } = render(<Select options={MONTHS} label={undefined} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with size small", () => {
    const { container } = render(<Select {...props} size="sm" />);
    expect(container).toMatchSnapshot();
  });
});
