import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { authContext } from "./context/authContext";

test("renders home component by default", () => {
  const user = { email: "testuser@example.com" };
  render(
    <authContext.Provider value={{ user }}>
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    </authContext.Provider>
  );
  // Check that the NavBar component is present
  const navBar = screen.getByRole("banner");
  expect(navBar).toBeInTheDocument();
});

test("renders login component with correct route", () => {
  render(
    <authContext.Provider value={{}}>
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    </authContext.Provider>
  );

  const loginTitles = screen.queryAllByText("Login", { exact: false });
  expect(loginTitles).toHaveLength(1);

  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();

  const loginButton = screen.getByRole("button", { name: /Sign In/i });
  expect(loginButton).toBeInTheDocument();
});
