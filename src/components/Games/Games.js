import React, { useEffect, useContext } from "react";
import { Game } from "./Game/Game";
import { Grid } from "@mui/material";
import { gamesContext } from "../../context/gamesContext";

export function Games() {
  const { games, getGames } = useContext(gamesContext);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <Grid
      container
      align="center"
      justify="center"
      alignItems="center"
      spacing={2}
      role="games-component"
    >
      {games.map((game) => (
        <Grid key={game.id} item xs={12} sm={6} md={4} lg={4}>
          <Game game={game} />
        </Grid>
      ))}
    </Grid>
  );
}
