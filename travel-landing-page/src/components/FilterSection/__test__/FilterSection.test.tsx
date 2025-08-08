import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { CATEGORIES, LOCATIONS } from "@/constants/common";
import FilterSection from "..";

describe("FilterSection component", () => {
  const onChange = jest.fn();
  const props = {
    defaultValue: {
      budget: [],
      locations: [],
      categories: [],
    },
    onChange,
  };

  beforeAll(() => {
    Element.prototype.setPointerCapture = jest.fn();
    Element.prototype.hasPointerCapture = jest.fn();
    Element.prototype.releasePointerCapture = jest.fn();
  });

  it("should render correctly", () => {
    const { container } = render(<FilterSection {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("should render correctly with default value locations, categories", () => {
    const locations = LOCATIONS.slice(0, 2).map(({ value }) => value);
    const categories = CATEGORIES.slice(1, 3).map(({ value }) => value);
    const { container } = render(
      <FilterSection
        defaultValue={{
          locations,
          categories,
        }}
        onChange={onChange}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onChange when budget change value", async () => {
    render(<FilterSection defaultValue={{ budget: [10, 200] }} onChange={onChange} />);

    const sliders: HTMLElement[] = await waitFor(() => screen.getAllByRole("slider"));
    const firstItem = sliders[0];
    fireEvent.click(firstItem);
    fireEvent.keyDown(firstItem, { key: "ArrowRight" });

    expect(onChange).toHaveBeenCalled();
  });

  it("calls onChange when location toggle is clicked", () => {
    render(<FilterSection onChange={onChange} />);

    const locationButton = screen.getByText(new RegExp(`${LOCATIONS[1].text}`));
    fireEvent.click(locationButton);

    expect(onChange).toHaveBeenCalledWith({
      locations: [LOCATIONS[1].value],
    });

    // Toggle off
    fireEvent.click(locationButton);
    expect(onChange).toHaveBeenCalledWith({
      locations: [],
    });
  });

  it("calls onChange when category toggle is clicked", () => {
    render(<FilterSection onChange={onChange} />);

    const categoryBtn = screen.getByText(new RegExp(`${CATEGORIES[1].text}`));
    fireEvent.click(categoryBtn);

    expect(onChange).toHaveBeenCalledWith({
      categories: [CATEGORIES[1].value],
    });

    // Toggle off
    fireEvent.click(categoryBtn);
    expect(onChange).toHaveBeenCalledWith({
      categories: [],
    });
  });
});
