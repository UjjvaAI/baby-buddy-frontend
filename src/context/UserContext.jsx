import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
