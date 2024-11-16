import { useAuth } from "../provider/authProvider";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import DropdownMenu from "./DropdownMenu";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <MainNav />
          <DropdownMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
