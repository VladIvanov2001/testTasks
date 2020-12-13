import React from 'react';
import './ListItem.css';

export const ListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { hasArrow, name } = props;
  return (
    <li className="nav__menu__item">
      <div>
        <span className="font-for-menu">{name}</span>
        {hasArrow && <div className="nav__menu__item-arrow" />}
      </div>
    </li>
  );
};
