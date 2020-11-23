import './Header.css'
import logoSpring from '../../images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
    return(
        <header className="header">
            <nav className="nav">
                <div className="container nav-container">
                    <a href="" className="nav__logo">
                        <img className="nav__logo-picture"
                             src={logoSpring}
                             alt="logo spring"/>
                    </a>
                    <ul className="nav__menu">
                        <li className="nav__menu__item">
                            <div>
                                <span className="font-for-menu">Why Spring</span>
                                <div className="nav__menu__item-arrow"/>
                            </div>
                        </li>
                        <li className="nav__menu__item">
                            <div>
                                <span className="font-for-menu">Learn</span>
                                <div className="nav__menu__item-arrow"/>
                            </div>
                        </li>
                        <li className="nav__menu__item">
                            <div>
                                <span className="font-for-menu">Projects</span>
                                <div className="nav__menu__item-arrow"/>
                            </div>
                        </li>
                        <li className="nav__menu__item">
                            <div>
                                <span className="font-for-menu salad">Training</span>
                            </div>
                        </li>
                        <li className="nav__menu__item">
                            <div>
                                <span className="font-for-menu salad">Support</span>
                            </div>
                        </li>
                        <li className="nav__menu__item">
                            <div>
                                <span className="font-for-menu">Community</span>
                                <div className="nav__menu__item-arrow"/>
                            </div>
                        </li>
                    </ul>
                    <BurgerMenu/>
                </div>
            </nav>
        </header>
    );
}

export default Header;
