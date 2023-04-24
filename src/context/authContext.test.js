import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "./authContext";
import React from "react";
import { act } from "react-dom/test-utils";

import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { useState } from "react";

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

  it("should provide a login function and user state for superuser", async () => {
    function TestComponent() {
      const { login, user } = useAuth();
      return (
        <div>
          <span data-testid="user">
            {user ? `${user?.email} (${user?.rol})` : "No user"}
          </span>
          <button
            data-testid="login-btn"
            onClick={async () =>
              await login("superuser@gmail.com", "prueba1234")
            }
          >
            Login
          </button>
        </div>
      );
    }

    signInWithEmailAndPassword.mockImplementation(async () => ({
      user: { email: "superuser@gmail.com", uid: "anuid" },
    }));
    getDoc.mockImplementation(async () => ({
      data: () => ({ rol: "superuser" }),
    }));

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
    // Se espera a que signInWithEmailAndPassword devuelva el email y el rol
    await waitFor(() => {
      expect(getByTestId("user").textContent).toBe(
        "superuser@gmail.com (superuser)"
      );
    });
  });
  it("should provide a login function and user state for user", async () => {
    function TestComponent() {
      const { login, user } = useAuth();
      return (
        <div>
          <span data-testid="user">
            {user ? `${user?.email} (${user?.rol})` : "No user"}
          </span>
          <button
            data-testid="login-btn"
            onClick={async () => await login("user@gmail.com", "user1234")}
          >
            Login
          </button>
        </div>
      );
    }

    signInWithEmailAndPassword.mockImplementation(async () => ({
      user: { email: "user@gmail.com", uid: "anuid" },
    }));
    getDoc.mockImplementation(async () => ({
      data: () => ({ rol: "user" }),
    }));

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
    // Se espera a que signInWithEmailAndPassword devuelva el email y el rol
    await waitFor(() => {
      expect(getByTestId("user").textContent).toBe("user@gmail.com (user)");
    });
  });
  it("should provide an error if the password is wrong", async () => {
    function TestComponent() {
      const { login, user } = useAuth();
      const [error, setError] = useState();
      return (
        <div>
          <span data-testid="user">
            {user ? `${user?.email} (${user?.rol})` : "No user"}
          </span>
          <button
            data-testid="login-btn"
            onClick={async () => {
              try {
                await login("user@gmail.com", "wrongPass");
              } catch (error) {
                setError(error.message);
              }
            }}
          >
            Login
          </button>
          {error && <span data-testid="error">{error}</span>}
        </div>
      );
    }

    signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({
        code: "auth/wrong-password",
        message: "Firebase: Error (auth/wrong-password).",
      })
    );
    getDoc.mockImplementation(async () => ({
      data: () => ({ rol: "user" }),
    }));

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
    // Se espera a que signInWithEmailAndPassword devuelva un error
    await waitFor(() => {
      expect(getByTestId("user").textContent).toBe("No user");
    });
    await waitFor(() => {
      expect(getByTestId("error").textContent).toBe(
        "Firebase: Error (auth/wrong-password)."
      );
    });
  });
  it("should provide an error if the user is wrong", async () => {
    function TestComponent() {
      const { login, user } = useAuth();
      const [error, setError] = useState();
      return (
        <div>
          <span data-testid="user">
            {user ? `${user?.email} (${user?.rol})` : "No user"}
          </span>
          <button
            data-testid="login-btn"
            onClick={async () => {
              try {
                await login("wrongUser@gmail.com", "wrongPass");
              } catch (error) {
                setError(error.message);
              }
            }}
          >
            Login
          </button>
          {error && <span data-testid="error">{error}</span>}
        </div>
      );
    }

    signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({
        code: "auth/user-not-found",
        message: "Firebase: Error (auth/user-not-found).",
      })
    );
    getDoc.mockImplementation(async () => ({
      data: () => ({ rol: "user" }),
    }));

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
    // Se espera a que signInWithEmailAndPassword devuelva un error
    await waitFor(() => {
      expect(getByTestId("user").textContent).toBe("No user");
    });
    await waitFor(() => {
      expect(getByTestId("error").textContent).toBe(
        "Firebase: Error (auth/user-not-found)."
      );
    });
  });
});
