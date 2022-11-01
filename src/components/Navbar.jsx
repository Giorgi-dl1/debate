import React, { useState } from 'react';
import '../styles/Navbar.css';
export default function Navbar() {
  const [userInfo, setUserInfo] = useState(false);
  return (
    <nav className="flex-between">
      <ul className="flex-between">
        <li className="active">
          <a href="#">ფორმატი</a>
        </li>
        {userInfo && (
          <>
            <li>
              <a href="#">გუნდი</a>
            </li>
            <li>
              <a href="#">დეტალები</a>
            </li>
            <li>
              <a href="#">შეფასება</a>
            </li>
          </>
        )}
      </ul>
      <div className="login">შესვლა</div>
    </nav>
  );
}
