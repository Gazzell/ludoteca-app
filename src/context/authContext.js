import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConf";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not authProvider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ login, user }}>
      {children}
    </authContext.Provider>
  );
}
