import React from "react";
import { render, screen } from "@testing-library/react";
import { Game } from "./Game";

const mockGame = {
  id: 1,
  titulo: "Game 1",
  playerNum: "3-8",
  timeMins: 10,
  editorial: "Editorial 1",
  imageUrl: "https://example.com/image.png",
};

describe("Game", () => {
  it("renders game info correctly", () => {
    render(<Game game={mockGame} />);

    expect(screen.getByText(mockGame.titulo)).toBeInTheDocument();
    expect(screen.getByText(mockGame.editorial)).toBeInTheDocument();

    expect(
      screen.getByText(
        `${mockGame.playerNum} Jugadores // ${mockGame.timeMins} minutos`
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Detalles" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Reservar" })
    ).toBeInTheDocument();
  });
  //it("calls onClick handlers when buttons are clicked", () => {
});
