import { render } from "@testing-library/react";

import AlertDialog from "..";

describe("AlertDialog component", () => {
  it("should render correctly", () => {
    const { container } = render(<AlertDialog title="Are you absolutely sure?" />);
    expect(container).toMatchSnapshot();
  });

  it("should render correctly with full props", () => {
    const props = {
      title: "Are you absolutely sure?",
      description:
        "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
      textButton: "Click me!",
      textCancel: "Cancel",
      textAction: "Submit",
    };

    const { container } = render(<AlertDialog {...props} />);
    expect(container).toMatchSnapshot();
  });
});
