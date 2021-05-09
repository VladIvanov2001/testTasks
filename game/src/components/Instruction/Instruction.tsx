import React, { ReactElement } from "react";
import './Instruction.css'

export const Instruction = (): ReactElement => {
  return (
    <div className="main-instruction">
      <p className="main-instruction-description">
        Каждая команда включает 6 юнитов, отображаемых в сетке 3x2 (столбцыxряды), то же самое для другой команд.
        Позиция юнита влияетна возможность атаки и выбор цели.
      </p>
      <div>
        <h2>Цвета на доске</h2>
        <div className="instruction">
          <div className="color-on-board red"></div>
          <span>- Для активного юнита</span>
        </div>
        <div className="instruction">
          <div className="color-on-board black"></div>
          <span>- Цвет при наведении на юнита</span>
        </div>
        <div className="instruction">
          <div className="color-on-board blue"></div>
          <span>- Цвет персонажей, на которых вы можете воздействовать</span>
        </div>
      </div>
      <div className="types">
        <h2>Виды персонажей</h2>
        <div className="heroes">
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/archimage.png" />
              <p>Архимаг</p>
            </div>
            <ul>
              <li>Тип юнита - ближний</li>
              <li>Здоровье - 50</li>
              <li>Урон - 20</li>
              <li>Инициатива - 40</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/bandit.png" />
              <p>Бандит</p>
            </div>
            <ul>
              <li>Тип юнита - дальний</li>
              <li>Здоровье - 75</li>
              <li>Урон - 30</li>
              <li>Инициатива - 60</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/bishop.png" />
              <p>Епископ</p>
            </div>
            <ul>
              <li>Тип юнита - Массовое лечение</li>
              <li>Здоровье - 130</li>
              <li>Количество лечения - 25</li>
              <li>Инициатива - 20</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/centaur.png" />
              <p>Кентавр</p>
            </div>
            <ul>
              <li>Тип юнита - ближний</li>
              <li>Здоровье - 150</li>
              <li>Урон - 50</li>
              <li>Инициатива - 50</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/elfArcher.png" />
              <p>Эльф-лучник</p>
            </div>
            <ul>
              <li>Тип юнита - дальний</li>
              <li>Здоровье - 90</li>
              <li>Урон - 45</li>
              <li>Инициатива - 60</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">

              <img src="/heroImages/monk.png" />
              <p>Монах</p>
            </div>
            <ul>
              <li>Тип юнита - лечение</li>
              <li>Здоровье - 90</li>
              <li>Лечение - 40</li>
              <li>Инициатива - 20</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/siren.png" />
              <p>Сирена</p>
            </div>
            <ul>
              <li>Тип юнита - парализатор</li>
              <li>Здоровье - 80</li>
              <li>Урон - нет урона, так как способность - паралич</li>
              <li>Инициатива - 20</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/skeleton.png" />
              <p>Скелет</p>
            </div>
            <ul>
              <li>Тип юнита - ближний</li>
              <li>Здоровье - 50</li>
              <li>Урон - 20</li>
              <li>Инициатива - 40</li>
            </ul>
          </div>
          <div className="heroes__hero">
            <div className="heroes__hero-description">
              <img src="/heroImages/skeletonMage.png" />
              <p>Скелет-маг</p>
            </div>
            <ul>
              <li>Тип юнита - дальний</li>
              <li>Здоровье - 50</li>
              <li>Урон - 20</li>
              <li>Инициатива - 40</li>
            </ul>
          </div>
        </div>
      </div>
        <p><a className="play-button" href='/game'>Играть</a></p>
    </div>
  )
}
