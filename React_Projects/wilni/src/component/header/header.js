import logo from "./logo.svg"
import langImg from "./lang.svg"
import arrowDown from "./arrow-down.svg"
import headerImg from "./headerImg.png"
import RedButton from "../redButton/redButton"
import "./header.scss"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
  const [state, setState] = useState(false);
  const [menu, setMenu] = useState(false);
  const changeState = () => {
    setState(prevState => !prevState)
  }
  const toggleMenu = () => {
    setMenu(prevState => !prevState)
  }
  const closeMenu = (e) => {
    setMenu(false)
  }
  const localHref = window.location.href;

  const body = document.body;

  menu ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
  const elementClass = state ? `header__button-div--active header__button-div` : "header__button-div"
  const headerRightElementClass = menu ? "header__right--active header__right" : "header__right";
  const headerMenuClass = menu ? "header__menu--active header__menu" : "header__menu";
  const mobileDonateBth = menu ? "header__button-mobile--active header__button-mobile" : "header__button-mobile"
  const headerContainer = menu ? "header__container--active header__container" : 'header__container'
  const headerLogo = menu ? "header__logo--active header__logo " : "header__logo";

  return (
    <header className="header">
      <div className="container">
        <div className={headerContainer}>
          <button className={headerMenuClass} onClick={toggleMenu}></button>
          <Link className={headerLogo} onClick={closeMenu} to={'wilni'}>
            <img src={logo} alt="logo" className="header__logoImg" />
            <p className="header__logoDescription">благодійний фонд</p>
          </Link>
          <div className={headerRightElementClass}>
            <nav className="header__nav">
              <div className="header__navLeft">
                <Link onClick={closeMenu} to={"about"} className="header__navLink">про фонд</Link>
                <Link onClick={closeMenu} to={"news"} className="header__navLink">новини</Link>
                <Link onClick={closeMenu} to={"reports"} className="header__navLink">звіти</Link>
                <a className="header__navLink-phone" href="tel:+380730000000"> +38 (073) 000-00-00 </a>
              </div>
              <div className="header__navRight">
                <div onClick={changeState} className="header__button">
                  <img className="header__img-lang" src={langImg} alt="changeLangImg" />
                  <span>ua</span>
                  <img className="header__img-arrow" src={arrowDown} alt="arrowDown" />
                  <div className={elementClass}>
                    <button className="header__button-changeLanguage">ua</button>
                    <button className="header__button-changeLanguage">en</button>
                  </div>
                </div>
                <Link onClick={closeMenu} to={'/quickDonate'} className="header__button"><RedButton text="Швидкий донат" /></Link>
                <img className="header__button" src={headerImg} alt='some img' />
              </div>
            </nav>
          </div>
          <Link to={'quickDonate'} className={mobileDonateBth}><RedButton text="Швидкий донат" /></Link>
        </div>
      </div>
    </header>
  )
}