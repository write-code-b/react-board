import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("login-token"));
  const [username, setUsername] = useState("");

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("login-token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("login-token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      username,
      setUsername,
    }),
    [token, username]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
