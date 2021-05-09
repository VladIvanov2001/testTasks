import React, { ReactElement } from 'react';
import './Menu.css';

export const Menu = ():ReactElement =>{


    return(
        <div className="main-page">
            <h1>Welcome to the game</h1>
            <div className="main-page__menu">
                <p><a href='/game'>Play</a></p>
                <p><a href='/instruction'>How to play</a></p>
            </div>
        </div>
    )
}