export const Menu = (props) => {
    return (
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
    )
};

export default Menu;
