import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { NAV_BAR } from "@/constants";
import NavigationMenu from "..";

describe("NavigationMenu", () => {
  it("should render correctly", () => {
    const { container } = render(<NavigationMenu list={NAV_BAR} />);
    expect(container).toMatchSnapshot();
  });

  it("should render correctly Activities", () => {
    const { container } = render(<NavigationMenu list={NAV_BAR} path={NAV_BAR[0].href} />);
    expect(container).toMatchSnapshot();
  });
});
