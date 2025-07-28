import { fireEvent, render, screen } from "@testing-library/react";

import FilterSection from "..";
import { CATEGORIES, LOCATIONS } from "@/constants/common";

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

  it("calls onChange when location toggle is clicked", () => {
    const mockOnChange = jest.fn();
    render(<FilterSection onChange={mockOnChange} />);

    const locationButton = screen.getByText(new RegExp(`${LOCATIONS[1].text}`));
    fireEvent.click(locationButton);

    expect(mockOnChange).toHaveBeenCalledWith({
      locations: [LOCATIONS[1].value],
    });

    // Toggle off
    fireEvent.click(locationButton);
    expect(mockOnChange).toHaveBeenCalledWith({
      locations: [],
    });
  });

  it("calls onChange when category toggle is clicked", () => {
    const mockOnChange = jest.fn();
    render(<FilterSection onChange={mockOnChange} />);

    const categoryBtn = screen.getByText(new RegExp(`${CATEGORIES[1].text}`));
    fireEvent.click(categoryBtn);

    expect(mockOnChange).toHaveBeenCalledWith({
      categories: [CATEGORIES[1].value],
    });

    // Toggle off
    fireEvent.click(categoryBtn);
    expect(mockOnChange).toHaveBeenCalledWith({
      categories: [],
    });
  });
});
