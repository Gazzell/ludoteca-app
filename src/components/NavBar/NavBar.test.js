import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

describe("NavBar", () => {
  test("renders home icon", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const homeIcon = screen.getByLabelText("Home");
    expect(homeIcon).toBeInTheDocument();
  });

  test("renders app title", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const appTitle = screen.getByText("APP");
    expect(appTitle).toBeInTheDocument();
  });

  test("renders user email and logout button when user is logged in", () => {
    const user = { email: "example@example.com" };
    const onLogout = jest.fn();
    render(
      <BrowserRouter>
        <NavBar user={user} onLogout={onLogout} />
      </BrowserRouter>
    );
    const userEmail = screen.getByText(user.email);
    expect(userEmail).toBeInTheDocument();
    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
    logoutButton.click();
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});
