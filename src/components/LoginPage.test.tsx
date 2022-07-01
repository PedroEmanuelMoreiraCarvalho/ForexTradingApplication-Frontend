import { fireEvent, getByTestId, queryByPlaceholderText, queryByTestId, render } from "@testing-library/react";
import LoginPage from "./LoginPage";

test("Click login button", () => {
    const { container } = render(<LoginPage/>);
    const button = getByTestId(container, 'login-button');
    fireEvent.click(button);
});

test("warning does not render on page load", () => {
    const { container } = render(<LoginPage/>);
    expect(queryByTestId(container, 'warning')).toBeNull()
});

test("name field is rendering", () => {
    const { container } = render(<LoginPage/>);
    expect(queryByPlaceholderText(container,"name")).toBeInTheDocument();
});

test("password field is rendering", () => {
    const { container } = render(<LoginPage/>);
    expect(queryByPlaceholderText(container,"password")).toBeInTheDocument();
});