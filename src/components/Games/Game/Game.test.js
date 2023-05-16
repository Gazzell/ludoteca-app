import React from "react";
import { render, screen } from "@testing-library/react";
import { Game } from "./Game";
import { MemoryRouter } from "react-router-dom";

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
    render(
      <MemoryRouter>
        <Game game={mockGame} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockGame.titulo)).toBeInTheDocument();
    expect(screen.getByText(mockGame.editorial)).toBeInTheDocument();

    const detallesButton = screen.getByText("Detalles");
    expect(detallesButton).toBeInTheDocument();
    const reservarButton = screen.getByText("Reservar");
    expect(reservarButton).toBeInTheDocument();
  });
});
