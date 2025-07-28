import { ReactNode } from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { USER_DROPDOWNS, USER_DROPDOWNS_LENGTH } from "@/constants/nav";

import UserDropdown from "..";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock("@clerk/nextjs", () => ({
  ...jest.requireActual("@clerk/nextjs"),
  useUser: () => ({
    user: {
      firstName: "John",
      lastName: "Doe",
      imageUrl: "https://i.ibb.co/cXVN8z3D/avatar-01.png",
    },
  }),
  SignOutButton: ({ children }: { children: ReactNode }) => (
    <button data-testid="signout-button">{children}</button>
  ),
}));

describe("UserDropdown component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render correctly", () => {
    const { container } = render(<UserDropdown />);
    expect(container).toMatchSnapshot();
  });

  it("should renders SignOutButton as last item", async () => {
    render(<UserDropdown />);

    await act(async () => {
      userEvent.click(screen.getByTestId("btn-dropdown"));
    });

    const signOutItem = await waitFor(() => screen.getByTestId("signout-button"));
    expect(signOutItem).toBeInTheDocument();
    expect(signOutItem).toHaveTextContent(USER_DROPDOWNS[USER_DROPDOWNS_LENGTH - 1].text);
  });

  it("should open dropdown menu and render correct number of items", async () => {
    render(<UserDropdown />);

    await act(async () => {
      userEvent.click(screen.getByTestId("btn-dropdown"));
    });

    const items: HTMLElement[] = await waitFor(() => screen.getAllByTestId("dropdown-menu-item"));

    expect(items).toHaveLength(USER_DROPDOWNS_LENGTH);
  });

  it("should call router.push when clicking first item", async () => {
    render(<UserDropdown />);

    await act(async () => {
      userEvent.click(screen.getByTestId("btn-dropdown"));
    });

    const items: HTMLElement[] = await waitFor(() => screen.getAllByTestId("dropdown-menu-item"));
    fireEvent.click(items[0]);

    expect(mockPush).toHaveBeenCalledTimes(1);
  });

  it("should not call clicking sign out item(latest item)", async () => {
    render(<UserDropdown />);

    await act(async () => {
      userEvent.click(screen.getByTestId("btn-dropdown"));
    });

    const items: HTMLElement[] = await waitFor(() => screen.getAllByTestId("dropdown-menu-item"));
    fireEvent.click(items[USER_DROPDOWNS_LENGTH - 1]);

    expect(mockPush).not.toHaveBeenCalled();
  });
});
