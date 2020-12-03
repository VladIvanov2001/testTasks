import React, { useState, useEffect } from 'react';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { arrDescription } from '../../constants/SpringInfo';
import { Description } from '../Description/Description';
import { setArrForSearch } from '../../redux/actions/action';

export function Main() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const arrWithInitinalMenuItems = useSelector((state) => state.searchTags.arr);

  useEffect(() => {
    // eslint-disable-next-line max-len
    dispatch(setArrForSearch(arrDescription.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase())
      || elem.description.toLowerCase().includes(name.toLowerCase()))));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(setArrForSearch(arrDescription));
  }, [dispatch]);

  return (
    <main className="main">
      <Description />
      <div className="content">
        <label className="custom-input" htmlFor="search">
          <input
            type="text"
            id="search"
            placeholder="Input your words"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="container">
          <div className="content__info">
            {arrWithInitinalMenuItems && arrWithInitinalMenuItems.length !== 0 ? (
              arrWithInitinalMenuItems.map((item) => (
                <a href="/#" key="card-{$idx}" className="content__info__item">
                  <div className="content__info__item-picture">
                    <img alt="logo-of-item" src={item.image} />
                  </div>
                  <div className="content__info__item-description">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              ))
            ) : (
              <p>There is no result</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
