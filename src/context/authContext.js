import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, firestore } from "../firebaseConf";
import { doc, getDoc } from "firebase/firestore";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not authProvider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getRol(uid) {
    const docRef = doc(firestore, `users/${uid}`);
    const docData = await getDoc(docRef);
    const finalDoc = docData.data().rol;
    return finalDoc;
  }

  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    const currentUser = userCredentials.user;
    const rol = await getRol(currentUser.uid);
    currentUser.rol = rol;
    setUser(currentUser);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getRol(currentUser.uid).then((rol) => {
          currentUser.rol = rol;
          setUser(currentUser);
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <authContext.Provider value={{ login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}
