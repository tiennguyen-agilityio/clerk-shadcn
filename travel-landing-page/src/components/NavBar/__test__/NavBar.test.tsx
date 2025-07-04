import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { NAV_BAR } from "@/constants";
import NavBar from "..";

describe("NavBar", () => {
  it("should render correctly", () => {
    const { container } = render(<NavBar list={NAV_BAR} />);
    expect(container).toMatchSnapshot();
  });

  it("should render correctly Activities", () => {
    const { container } = render(<NavBar list={NAV_BAR} href="/activities" />);
    expect(container).toMatchSnapshot();
  });
});
