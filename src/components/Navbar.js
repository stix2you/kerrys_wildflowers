import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

function Navbar() {
   return (
      <nav className={styles.navbar}>
         <div className={styles.logo}>
            Wisconsin Wildflowers
         </div>
         <ul className={styles.navLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/seeds">Seeds</Link></li>
            <li><Link to="/canned-products">Canned Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
         </ul>
         <div className={styles.hamburgerMenu}>
            {/* Hamburger menu implementation */}
         </div>
      </nav>
   );
}

export default Navbar;
