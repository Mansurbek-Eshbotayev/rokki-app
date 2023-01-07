import "./header.css"
import { Link, NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <header className="header w-100 d-flex justify-content-between bg-black pt-3 px-5" >
      <div>
      <Link to="/">Logo</Link>
      </div>

      <ul className="header__list  list-unstyled d-flex">
        <li className="header__item me-4">
          <NavLink className={({isActive}) => 
           isActive
           ?"header__link text-decoration-underline" 
           :"header__link"}
            to="/character">Character</NavLink>
        </li>
        <li className="header__item me-4">
          <NavLink className={({isActive}) => 
           isActive? "header__link text-decoration-underline" :"header__link"} to="/episode">Episode</NavLink>
        </li>
        <li className="header__item me-4">
          <NavLink className={({isActive}) => 
           isActive? "header__link text-decoration-underline" :"header__link"} to="/location">Location</NavLink>
        </li>
      </ul>
    </header>
  )
}
