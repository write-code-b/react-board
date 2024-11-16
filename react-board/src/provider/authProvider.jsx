import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("login-token"));
  const [id, setId_] = useState(localStorage.getItem("userId"));

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  const setId = (newId) => {
    setId_(newId);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("login-token", token);
      localStorage.setItem("userId", id);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("login-token");
      localStorage.removeItem("userId");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      id,
      setId,
    }),
    [token, id]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
