import { render } from "@testing-library/react";

import LocationFilter from "..";

describe("LocationFilter component", () => {
  it("should render correctly", () => {
    const { container } = render(<LocationFilter />);
    expect(container).toMatchSnapshot();
  });
});
