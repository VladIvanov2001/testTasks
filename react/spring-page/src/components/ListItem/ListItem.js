import './ListItem.css'

export const ListItem = (props) => {
  const { hasArrow, name } = props
  return (
    <li className="nav__menu__item">
      <div>
        <span className="font-for-menu">{name}</span>
        {hasArrow && <div className="nav__menu__item-arrow" />}
      </div>
    </li>
  )
}
