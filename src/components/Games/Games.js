import React, { useEffect, useState } from "react";
import { Game } from "./Game/Game";
import { Grid } from "@mui/material";
import { firestore } from "../../firebaseConf";
import { collection, getDocs } from "firebase/firestore";

export function Games() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const docs = [];
    const querySnapshot = await getDocs(collection(firestore, "games"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
      docs.push({ ...doc.data(), id: doc.id });
    });

    console.log(docs);
    setGames(docs);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Grid container alignItems="strech" spacing={2}>
      {games.map((game) => (
        <Grid key={game.id} item xs={12} sm={6}>
          <Game game={game} />
        </Grid>
      ))}
    </Grid>
  );
}
