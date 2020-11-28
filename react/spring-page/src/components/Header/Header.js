import './Header.css'
import logoSpring from '../../images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import {ListItem} from "../ListItem/ListItem";

export function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="container nav-container">
                    <a href="" className="nav__logo">
                        <img className="nav__logo-picture"
                             src={logoSpring}
                             alt="logo spring"/>
                    </a>
                    <ul className="nav__menu">
                        <ListItem name='Why Spring?' hasArrow={true}/>
                        <ListItem name='Learn?' hasArrow={true}/>
                        <ListItem name='Projects' hasArrow={true}/>
                        <ListItem name='Training'/>
                        <ListItem name='Support'/>
                        <ListItem name='Community' hasArrow={true}/>
                    </ul>
                    <BurgerMenu/>
                </div>
            </nav>
        </header>
    );
}
