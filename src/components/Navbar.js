import styles from "../style/layout.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [check, setCheck] = useState(false);

  return (
    <header className={styles.navigation}>
      <Link to="/">
        <img
          src="/assets/shared/desktop/logo-dark.png"
          alt="designo logo"
          className={styles.logo}
        />
      </Link>

      <nav className={styles.main__navbar}>
        <ul className={styles.desktop__navbar}>
          <li>
            <Link to="/Company">Our Company</Link>
          </li>
          <li>
            <Link to="Location">Locations</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>

        <label
          htmlFor="mobile"
          className={styles.mobile__navbar}
          onClick={() => setCheck(!check)}
        >
          <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#1D1C1E" fillRule="evenodd">
              <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
            </g>
          </svg>
        </label>
      </nav>
      <input type="checkbox" name="mobile" id="mobile" checked={check} onChange={(e)=>e.preventDefault} />
      <ul className={styles.mobile__menu} id="mobile__menu">
        <li onClick={() => setCheck(!check)}>
          <Link to="/Company">Our Company</Link>
        </li>
        <li onClick={() => setCheck(!check)}>
          <Link to="Location">Locations</Link>
        </li>
        <li onClick={() => setCheck(!check)}>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
