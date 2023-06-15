import React from "react";
import { Games } from "./Games/Games.js";
import { GamesProvider } from "../context/gamesContext.js";

export function Home() {
  return (
    <GamesProvider>
      <Games />
    </GamesProvider>
  );
}
