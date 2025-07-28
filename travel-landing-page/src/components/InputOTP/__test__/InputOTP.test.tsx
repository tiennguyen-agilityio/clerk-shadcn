import { render, screen, fireEvent } from "@testing-library/react";

import InputOTP from "..";

describe("InputOTP component", () => {
  const onChange = jest.fn();

  const props = {
    maxLength: 6,
    onChange,
  };

  it("should render default", () => {
    const { container } = render(<InputOTP {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("renders no slots if maxLength=0", () => {
    render(<InputOTP />);
    const group = screen.getByTestId("group");
    expect(group.querySelectorAll("input").length).toBe(0);
  });

  it("renders correct number of slots based on maxLength", () => {
    render(<InputOTP maxLength={6} />);

    const group = screen.getByTestId("group");
    const slots = group.querySelectorAll("[data-slot]"); // or use a custom selector if your slots have a class

    expect(group).toBeInTheDocument();
    expect(slots.length).toBe(6);
  });

  it("should call onChange event when fill value", async () => {
    render(<InputOTP data-testid="inputOTP" {...props} />);

    const inputElement = screen.getByTestId("inputOTP");
    fireEvent.change(inputElement, { target: { value: "123456" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
