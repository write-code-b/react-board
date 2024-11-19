import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const { setToken, setRefreshToken } = useAuth();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [active, setActive] = useState(false);

  const handleLogin = () => {
    axios
      .post("/auth/signin", JSON.stringify(loginInfo), {
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
        alert("잘못된 아이디/비밀번호입니다.");
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
      <section id="signIn">
        <div className="wrap">
          <h2>로그인</h2>
          <div className="loginBox">
            <div>
              <input type="text" name="username" onChange={onChange} placeholder="이메일 입력" autoFocus />
            </div>
            <div>
              <input type="password" name="password" onChange={onChange} placeholder="비밀번호 입력" />
            </div>
            <button className={active ? "" : "inactive"} onClick={handleLogin}>
              로그인
            </button>
            <a href="/signup">회원가입</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
