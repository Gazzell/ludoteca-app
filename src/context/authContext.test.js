import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "./authContext";
import React from "react";

describe("AuthContext", () => {
  it("throws an error when a component not covered with in AuthProvider", () => {
    function ComponentWithoutAuth() {
      useAuth();
      return null;
    }
    expect(() => render(<ComponentWithoutAuth />)).toThrow(
      "There is not authProvider"
    );
  });

  it("renders children when wrapped in AuthProvider", () => {
    render(
      <AuthProvider>
        <div>Test</div>
      </AuthProvider>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("should provide a login function and user state", async () => {
    function TestComponent() {
      const { login, user } = useAuth();
      return (
        <div>
          <span data-testid="user">{user ? user.email : "No user"}</span>
          <button
            data-testid="login-btn"
            onClick={async () => await login("test@example.com", "password123")}
          >
            Login
          </button>
        </div>
      );
    }

    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Al principio no deberia existir
    expect(getByTestId("user").textContent).toBe("No user");

    // Se activa el boton
    fireEvent.click(getByTestId("login-btn"));

    // Se espera a que signInWithEmailAndPassword devuelva el email
    await waitFor(() =>
      expect(getByTestId("user").textContent).toBe("test@example.com")
    );
  });
});
