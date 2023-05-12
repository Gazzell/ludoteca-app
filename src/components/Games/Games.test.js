import { Games } from "./Games";
import { render, waitFor } from "@testing-library/react";
import { collection, getDocs } from "firebase/firestore";

jest.mock("firebase/firestore");

const mockGames = [
  {
    id: 1,
    titulo: "Game 1",
    numeroJugadores: "3-8",
    tiempoMin: 10,
    editorial: "Atomo",
    image: "10-nights",
    adquisionDate: "30/11/2019",
    edad: 12,
  },
  {
    id: 2,
    titulo: "Game 2",
    numeroJugadores: "3-8",
    tiempoMin: 10,
    editorial: "Fer (Socio)",
    image: "adventure-land",
    adquisionDate: "15/11/2019",
    edad: 10,
  },
];

describe("Games", () => {
  it("renders games", async () => {
    getDocs.mockImplementation(async () => ({
      forEach: (callback) => {
        mockGames.forEach((game) => {
          callback({
            data: () => game,
            id: game.id.toString(),
          });
        });
      },
    }));

    const { getByText } = render(<Games />);

    await waitFor(() => {
      expect(getDocs).toHaveBeenCalled();
      expect(getByText("Game 1")).toBeInTheDocument();
      expect(getByText("Game 2")).toBeInTheDocument();
    });
  });
});
