import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const { setToken, setUsername, username } = useAuth();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post(`${baseUrl}/auth/signin`, JSON.stringify({ username, password }), {
        headers: { "Content-Type": `application/json` },
      })

      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("login-token", res.data.accessToken);
          setToken(res.data.accessToken);
        }
        navigate("/", { replace: true });
      })

      .catch((err) => {
        console.error(err);
      });
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="signIn">
        <div>
          <div className="username">로그인</div>
          <input type="text" onChange={onChangeUsername} />
        </div>
        <div>
          <div className="password">비밀번호</div>
          <input type="text" onChange={onChangePassword} />
        </div>
      </div>
      <button onClick={handleLogin}>로그인</button>
    </>
  );
};

export default Login;
