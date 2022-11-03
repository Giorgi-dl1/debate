import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/Navbar.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Store);

  const logout = () => {
    dispatch({ type: 'LOG_OUT' });
    navigate('/');
  };
  return (
    <nav
      className={
        pathname === '/login' ? 'border-b flex-between' : 'flex-between'
      }
    >
      <ul className="flex-between">
        <li className={pathname === '/' ? 'active' : ''}>
          <Link to="/">ფორმატი</Link>
        </li>
        {userInfo && (
          <>
            <li className={pathname === '/team' ? 'active' : ''}>
              <Link to="/team">გუნდი</Link>
            </li>
            <li className={pathname === '/details' ? 'active' : ''}>
              <Link to="#">დეტალები</Link>
            </li>
            <li className={pathname === '/review' ? 'active' : ''}>
              <Link to="#">შეფასება</Link>
            </li>
            {userInfo.isAdmin && (
              <li className={pathname === '/review' ? 'active' : ''}>
                <Link to="#">ადმინი</Link>
              </li>
            )}
          </>
        )}
      </ul>
      {userInfo ? (
        <div className="nav-dropdown">
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="styled-button flex-between"
          >
            <span>პროფილი</span>
            <AiOutlineArrowDown
              className={showProfile ? 'rotate icon' : 'icon'}
            />
          </div>
          <div
            className={
              showProfile
                ? 'nav-dropdown-items show-items'
                : 'nav-dropdown-items'
            }
          >
            <div className="nav-dropdown-label">{userInfo.name}</div>
            <div className="nav-dropdown-item">პარამეტრები</div>
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
  );
}
