import React, { useState, useEffect } from 'react'
import './Main.css'
import { useDispatch, useSelector } from 'react-redux'
import { arrDescription } from '../../constants/SpringInfo'
import { Description } from '../Description/Description'
// import { initialState, rootReducer } from '../../redux/store'
import { setArrForSearch, searchTags } from '../../redux/actions/action'

export function Main() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const arrData = useSelector((state) => state.arr)

  // useEffect(() => {
  //     setArr(arrDescription.filter(elem =>
  //         elem.name.toLowerCase().includes(name.toLowerCase()) || elem.description.toLowerCase().includes(name.toLowerCase()))
  //     );
  // }, [name]);

  useEffect(() => {
    dispatch(setArrForSearch(arrDescription))
    console.log(arrDescription)
  }, [])

  return (
    <main className="main">
      <Description />
      <div className="content">
        <label className="custom-input">
          <input
            type="text"
            className="search"
            placeholder="Input your words"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="container">
          <div className="content__info">
            {arrData.length !== 0 ? (
              arrData.map((item, idx) => (
                <a key={idx} className="content__info__item">
                  <div className="content__info__item-picture">
                    <img alt="image" src={item.image} />
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
  )
}
