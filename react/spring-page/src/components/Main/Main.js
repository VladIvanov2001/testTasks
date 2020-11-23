import React, { useState } from 'react';
import './Main.css'
import * as ArrayInfo from'../../constants/SpringInfo'
import springBoot from '../../images/spring-boot.svg'


function returnArr(arr, string) {
    let newArr = [];
    arr.forEach((elem, index) => {
        if (elem.name.toLowerCase().includes(string.toLowerCase()) || elem.description.toLowerCase().includes(string.toLowerCase())) {
            newArr.push(elem);
        }
    });
    return newArr;
}

function Main() {
    const [name, setName] = useState('');
    const newArr = returnArr(ArrayInfo.arrDescription, name);
    return(
        <main className="main">
            <div className="container description">
                <h1 className="header-title">Projects</h1>
                <p className="big-text">From configuration to&nbsp;security, web apps to&nbsp;big data&mdash;whatever
                    the
                    infrastructure needs of&nbsp;your
                    application may&nbsp;be, there is&nbsp;a&nbsp;Spring Project to&nbsp;help you build&nbsp;it. Start
                    small
                    and use just what you need&mdash;Spring is&nbsp;modular by&nbsp;design.</p>
            </div>
            <div className="content">
                <label className="custom-input">
                    <input type="text" className="search" placeholder="Input your words" value={name} onChange={e => setName(e.target.value)}/>
                </label>
                <div className="container">
                    <div className="content__info">
                        {newArr.map((item) =>{
                            return(
                                <a className='content__info__item'>
                                    <div className='content__info__item-picture'>
                                        <img src={item.image}/>
                                    </div>
                                    <div className='content__info__item-description'>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main
