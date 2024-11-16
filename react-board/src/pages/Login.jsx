import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const { setToken, setId } = useAuth();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  const handleLogin = () => {
    axios
      .post(`${baseUrl}/auth/signin`, JSON.stringify({ username, password }), {
        headers: { "Content-Type": `application/json` },
      })

      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("login-token", res.data.accessToken);
          localStorage.setItem("userId", username);
          setToken(res.data.accessToken);
          setId(username);
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

  useEffect(() => {
    if (username && password) setActive(true);
    else setActive(false);
  }, [username, password]);

  return (
    <>
      <Header />
      <main>
        <div className="signIn">
          <div className="title">로그인</div>
          <div>
            <input type="text" onChange={onChangeUsername} placeholder="이메일 입력" />
          </div>
          <div>
            <input type="text" onChange={onChangePassword} placeholder="비밀번호 입력" />
          </div>
          <button className={active ? "" : "inactive"} onClick={handleLogin}>
            로그인
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
