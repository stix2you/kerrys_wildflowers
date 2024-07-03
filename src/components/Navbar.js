import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

function Navbar() {
   return (
      <nav className="navbar">

         <div className="header-upper">
            <div className="logo">
               WISCONSIN<br />WILDFLOWERS
            </div>
            <div className="search-and-cart menu center">
            <Link to="/search" className="top_link no-underline" data-dropdown-rel="search">SEARCH</Link>
            <Link to="/cart" className="top_link no-underline" title="Cart" data-no-instant="">
              CART&nbsp;&nbsp;<span className="cart_count">(0)</span>
            </Link>
          </div>
         </div>

         <div className="header-lower">
            <ul className="navLinks">
               <li><Link to="/">HOME</Link></li>
               <li><Link to="/education">EDUCATION</Link></li>
               <li><Link to="/seeds">SEEDS</Link></li>
               <li><Link to="/canned-products">CANNED PRODUCTS</Link></li>
               <li><Link to="/cart">CONTACT</Link></li>
            </ul>
            <div className={styles.hamburgerMenu}>
               {/* Hamburger menu implementation */}
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
