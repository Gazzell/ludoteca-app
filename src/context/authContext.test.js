import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "./authContext";
import React from "react";
import { act } from "react-dom/test-utils";

import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc } from "firebase/firestore";

jest.mock("firebase/auth");
jest.mock("firebase/firestore");

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
          <span data-testid="user">
            {user ? `${user?.email} (${user?.rol})` : "No user"}
          </span>
          <button
            data-testid="login-btn"
            onClick={async () => await login("superuser@gmail.com", "prueba1234")}
          >
            Login
          </button>
        </div>
      );
    }

    signInWithEmailAndPassword.mockImplementation(async () => ({ user: { email: "superuser@gmail.com", uid: "anuid"  } }));
    getDoc.mockImplementation(async () => ({ data: () => ({ rol: 'superuser' })}));
    
    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Al principio no deberia existir
    expect(getByTestId("user").textContent).toBe("No user");

    // Se activa el boton
    await act(async () => {
      fireEvent.click(getByTestId("login-btn"));
    });
    // Se espera a que signInWithEmailAndPassword devuelva el email
    await waitFor(() => {
      expect(getByTestId("user").textContent).toBe("superuser@gmail.com (superuser)");
    }
    );
  });
});
