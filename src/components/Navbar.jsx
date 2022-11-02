import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import "../styles/Navbar.css";
export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Store);

  const logout = () => {
    dispatch({ type: "LOG_OUT" });
    navigate("/");
  };
  return (
    <nav
      className={
        pathname === "/login" ? "border-b flex-between" : "flex-between"
      }
    >
      <ul className="flex-between">
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">ფორმატი</Link>
        </li>
        {userInfo && (
          <>
            <li className={pathname === "/team" ? "active" : ""}>
              <Link to="/team">გუნდი</Link>
            </li>
            <li className={pathname === "/details" ? "active" : ""}>
              <Link to="#">დეტალები</Link>
            </li>
            <li className={pathname === "/review" ? "active" : ""}>
              <Link to="#">შეფასება</Link>
            </li>
          </>
        )}
      </ul>
      {userInfo ? (
        <button onClick={logout} className="styled-button">
          გამოსვლა
        </button>
      ) : (
        <Link to="/login">
          <button className="styled-button">შესვლა</button>
        </Link>
      )}
    </nav>
  );
}
