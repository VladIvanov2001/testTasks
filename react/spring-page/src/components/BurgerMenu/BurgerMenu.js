import React from 'react';
import './BurgerMenu.css';

export function BurgerMenu() {
  return (
    <div className="nav__menu__mobile">
      <div className="hamburger-menu">
        <div className="hamburger-menu__bar" />
        <div className="hamburger-menu__bar" />
        <div className="hamburger-menu__bar" />
      </div>
    </div>
  );
}
