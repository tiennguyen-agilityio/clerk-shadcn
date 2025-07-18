import { fireEvent, render, screen } from "@testing-library/react";

import { EXPERIENCES } from "@/constants";

import Experiences from "..";

describe("Experiences component", () => {
  const props = {
    list: EXPERIENCES,
  };

  const onChange = jest.fn();

  it("should render correctly", () => {
    const { container } = render(<Experiences {...props} onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with empty label", () => {
    const { container } = render(
      <Experiences
        list={[
          {
            title: EXPERIENCES[0].title,
          },
        ]}
        onChange={onChange}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls onChange with correct index on item click", () => {
    render(<Experiences {...props} onChange={onChange} />);

    const item = screen.getByText(EXPERIENCES[0].title);
    fireEvent.click(item);

    expect(onChange).toHaveBeenCalledWith(0);
  });

  it("does not call onChange when clicking already active item", () => {
    const mockOnChange = jest.fn();

    render(<Experiences list={EXPERIENCES} onChange={onChange} />);

    const item = screen.getByText(EXPERIENCES[0].title);
    fireEvent.click(item);
    fireEvent.click(item);

    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
