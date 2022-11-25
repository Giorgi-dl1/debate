import { Link } from "react-router-dom";

export default function NavLinks({ userInfo, pathname }) {
  return (
    <ul className="flex-between nav-links">
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
          {userInfo.isAdmin && (
            <li className={pathname === "/review" ? "active" : ""}>
              <Link to="#">ადმინი</Link>
            </li>
          )}
        </>
      )}
    </ul>
  );
}
