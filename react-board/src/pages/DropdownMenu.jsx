import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { token } = useAuth();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      <div className="topNav">
        <Link to="/">
          <img src="../../public/logo.png" id="logo" alt="" />
        </Link>
        <button className="dropdown-toggle" onClick={toggleMenu}></button>
      </div>
      <ul className="dropdown-list">
        <Link to="/list">
          <li>글 목록</li>
        </Link>{" "}
        {!token && (
          <Link to="/login">
            <li>로그인</li>
          </Link>
        )}
        {token && (
          <Link to="/write">
            <li>글쓰기</li>
          </Link>
        )}
        {token && (
          <Link to="/logout">
            <li onClick={handleLogout}>로그아웃</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;
