import React, { useState, useEffect } from 'react';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { menuItemsDescription } from '../../constants/SpringInfo';
import { Description } from '../Description/Description';
import { setNecessaryElements } from '../../redux/actions/action';

export function Main() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.searchTags.arr);
  const [data, setData] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line max-len
    dispatch(setNecessaryElements(menuItemsDescription.filter((elem) => elem.name.toLowerCase()
      .includes(name.toLowerCase())
      || elem.description.toLowerCase()
        .includes(name.toLowerCase()))));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(setNecessaryElements(menuItemsDescription));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8000/',
      );

      setData(result);
      console.log(result);
    };
    fetchData();
  }, [data]);

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
            {menuItems && menuItems.length !== 0 ? (
              menuItems.map((item, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <a href="/#" key={`сard - ${idx}`} className="content__info__item">
                  <div className="content__info__item-picture">
                    <img alt="logo-of-item" src={item.image} />
                  </div>
                  <div className="content__info__item-description">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <p>{data}</p>
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
