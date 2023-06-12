import { createContext, useState, useCallback } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { firestore } from "../firebaseConf";

export const gamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [game, setGame] = useState({});
  const [games, setGames] = useState([]);

  const getGame = useCallback(async (id) => {
    const docRef = await doc(firestore, "games", id);
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) {
      const finalDoc = { ...querySnapshot.data(), id: querySnapshot.id };
      setGame(finalDoc);
    } else {
      console.log("El juego no existe.");
      setGame(null);
    }
  }, []);

  const getGames = async () => {
    const docs = [];
    const querySnapshot = await getDocs(collection(firestore, "games"));
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setGames(docs);
  };

  return (
    <gamesContext.Provider value={{ game, getGame, games, getGames }}>
      {children}
    </gamesContext.Provider>
  );
};
