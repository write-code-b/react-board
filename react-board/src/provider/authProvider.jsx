import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("login-token"));
  const [refreshToken, setRefreshToken_] = useState(localStorage.getItem("refresh-token"));

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  const setRefreshToken= (newRefreshToekn) => {
    setRefreshToken_(newRefreshToekn);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("login-token", token);
      localStorage.setItem("refresh-token", refreshToken);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.clear();
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      refreshToken,
      setRefreshToken,
    }),
    [token, refreshToken]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
