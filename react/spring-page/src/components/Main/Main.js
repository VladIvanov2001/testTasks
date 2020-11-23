import React, {useState} from 'react';
import './Main.css'
import * as ArrayInfo from '../../constants/SpringInfo'
import springBoot from '../../images/spring-boot.svg'
import Description from "../Description/Description";


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

    return (
        <main className="main">
            <Description/>
            <div className="content">
                <label className="custom-input">
                    <input type="text" className="search" placeholder="Input your words" value={name}
                           onChange={e => setName(e.target.value)}/>
                </label>
                <div className="container">
                    <div className="content__info">
                        { newArr.length !== 0 ?(
                            newArr.map((item) => {
                                return (
                                    <a className='content__info__item'>
                                        <div className='content__info__item-picture'>
                                            <img alt="image" src={item.image}/>
                                        </div>
                                        <div className="content__info__item-description">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </a>
                                )
                            })) : <p>There is no result</p>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
