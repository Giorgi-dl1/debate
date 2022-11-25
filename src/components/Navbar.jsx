import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import "../styles/Navbar.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import NavLinks from "./NavLinks";
export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Store);

  const logout = () => {
    dispatch({ type: "LOG_OUT" });
    setShowProfile(false);
    navigate("/");
  };
  return (
    <>
      <nav
        className={
          pathname === "/login" ? "border-b flex-between" : "flex-between"
        }
      >
        <div className="windows-screen">
          <NavLinks userInfo={userInfo} pathname={pathname} />
        </div>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {userInfo ? (
          <div className="nav-dropdown">
            <div
              onClick={() => setShowProfile(!showProfile)}
              className="styled-button flex-between"
            >
              <span>პროფილი</span>
              <AiOutlineArrowDown
                className={showProfile ? "rotate icon" : "icon"}
              />
            </div>
            <div
              className={
                showProfile
                  ? "nav-dropdown-items show-items"
                  : "nav-dropdown-items"
              }
            >
              <div className="nav-dropdown-label">{userInfo.name}</div>
              <div
                onClick={() => setShowProfile(!showProfile)}
                className="nav-dropdown-item"
              >
                პარამეტრები
              </div>
              <div onClick={logout} className="nav-dropdown-item">
                გასვლა
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="styled-button">შესვლა</button>
          </Link>
        )}
      </nav>
      <div className={showMenu ? "show-menu mobile-screen" : "mobile-screen"}>
        <NavLinks userInfo={userInfo} pathname={pathname} />
      </div>
      <div className={showMenu ? "menu-background" : ""} />
    </>
  );
}
