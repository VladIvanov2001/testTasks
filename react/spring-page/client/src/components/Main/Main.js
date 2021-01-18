import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { store } from '../../redux/store';
import './Main.css';
import { Description } from '../Description/Description';
import API from '../../utils/API';

export function Main() {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const isLoggedIn = store.getState().isLogin.isLogin;
  useEffect(() => {
    const fetchSearch = async () => {
      const result = await API.get(`/info/spring?filter=${name}`);
      setData(result.data);
    };
    fetchSearch();
  }, [name]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get('/info/spring');
      setData(result.data);
      console.log(isLoggedIn);
      console.log('first time');
    };
    fetchData();
  }, []);

  if (isLoggedIn) {
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
              {data && data.length !== 0 ? (
                data.map((item, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <a href="/#" key={`сard - ${idx}`} className="content__info__item">
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
  } return <Redirect to="/login" />;
}
