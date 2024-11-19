import { useState, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function SignUp() {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [active, setActive] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [validatedEmail, setValidatedEmail] = useState(false);
  const [validatedPassword, setValidatedPassword] = useState(false);
  const [checkedName, setCheckedName] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);

  const handleSignUp = () => {
    axios
      .post(`${baseUrl}/auth/signup`, JSON.stringify(signUpInfo), {
        headers: { "Content-Type": `application/json` },
      })

      .then((res) => {
        alert("회원가입을 완료했습니다.");
        navigate("/", { replace: true });
      })

      .catch((err) => {
        alert("회원가입 정보를 다시 입력해주세요.");
        navigate("/");
        console.error(err);
      });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });
    if (name === "username") {
      const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      setValidatedEmail(emailRegex.test(value));
    } else if (name === "password") {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      setValidatedPassword(passwordRegex.test(value));
    } else if (name === "name") {
      setCheckedName(e.target.value.length >= 1);
    } else if (name === "confirmPassword") {
      setCheckedPassword(validatedPassword && e.target.value === signUpInfo.password);
    }
  };
  useEffect(() => {
    //비밀번호 미입력시 비밀번호 확인 비활성화
    if (!validatedPassword) setCheckedPassword(false);

    //전체 유효성 검사 완료시 버튼 활성화
    if (validatedEmail && validatedPassword && checkedName && checkedPassword) setActive(true);
    else setActive(false);
  }, [signUpInfo]);

  return (
    <>
      <Header />
      <section id="signUp">
        <div className="wrap">
          <h2>회원가입</h2>
          <form action="">
            <div id="signUpForm">
              <div>
                <input type="email" name="username" onChange={onChange} placeholder="이메일" required autoFocus />
                <div className={`status ${validatedEmail ? "show" : ""}`}></div>
              </div>
              <div>
                <input type="text" name="name" onChange={onChange} placeholder="이름" required />
                <div className={`status ${checkedName ? "show" : ""}`}></div>
              </div>
              <div>
                <input type="password" name="password" onChange={onChange} placeholder="비밀번호" required autoComplete="off" />
                <div className={`status ${validatedPassword ? "show" : ""}`}></div>
              </div>
              <div>
                <input type="password" name="confirmPassword" onChange={onChange} placeholder="비밀번호 확인" required autoComplete="off" />
                <div className={`status ${checkedPassword ? "show" : ""}`}></div>
              </div>
            </div>
          </form>
          <button className={active ? "" : "inactive"} onClick={handleSignUp}>
            회원가입
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
