import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("login-token"));
  const [refreshToken, setRefreshToken_] = useState(localStorage.getItem("refresh-token"));
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const setToken = (newToken) => {
    setToken_(newToken);
  };
  const setRefreshToken = (newRefreshToekn) => {
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

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const exp = decodedToken.exp * 1000; //토큰 만료시간
      const timeout = exp - Date.now() - 60000;

      const timer = setTimeout(() => {
        refreshAuthToken();
      }, timeout);

      return () => clearTimeout(timer);
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

  //토큰 리프레시 요청 API
  const handleRefresh = () => {
    axios
      .post(`${baseUrl}/auth/refresh`, JSON.stringify({ refreshToken }), {
        headers: { "Content-Type": `application/json` },
      })

      .then((res) => {
        if (res.data.accessToken) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          localStorage.setItem("login-token", res.data.accessToken);
          localStorage.setItem("refresh-token", res.data.refreshToken);
          setToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        }
      })

      .catch((err) => {
        console.error(err);
      });
  };

  //토큰 재발급 함수
  function refreshAuthToken() {
    try {
      const response = handleRefresh();
      if (response.status === 200) {
        //console.log("Success Refresh!!", response);
        localStorage.setItem("login-token", res.data.accessToken);
        localStorage.setItem("refresh-token", res.data.refreshToken);
        setToken(response.data.accessToken);
        setTokenRefresh(response.data.refreshToken);
      } else {
        handleLogout();
      }
    } catch (error) {
      handleLogout();
    }
  }

  const handleLogout = () => {
    setToken();
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
