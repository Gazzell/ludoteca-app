import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders home page by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const homePage = screen.getByText(/Home/i);
  expect(homePage).toBeInTheDocument();
});

test("renders login page when navigating to /login", () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );
  const loginPage = screen.getByText(/Login/i);
  expect(loginPage).toBeInTheDocument();
});
