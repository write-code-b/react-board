import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const { setToken, setRefreshToken } = useAuth();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [active, setActive] = useState(false);

  const handleLogin = () => {
    axios
      .post(`${baseUrl}/auth/signin`, JSON.stringify(loginInfo), {
        headers: { "Content-Type": `application/json` },
      })

      .then((res) => {
        if (res.data.accessToken) {
          setToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        }
        navigate("/", { replace: true });
      })

      .catch((err) => {
        console.error(err);
      });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    if (loginInfo.username && loginInfo.password) setActive(true);
    else setActive(false);
  }, [loginInfo]);

  return (
    <>
      <Header />
      <div className="signIn">
        <div className="title">로그인</div>
        <div>
          <input type="text" name="username" onChange={onChange} placeholder="이메일 입력" />
        </div>
        <div>
          <input type="password" name="password" onChange={onChange} placeholder="비밀번호 입력" />
        </div>
        <button className={active ? "" : "inactive"} onClick={handleLogin}>
          로그인
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Login;
