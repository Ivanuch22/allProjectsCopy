import "./footer.scss";
import { Link } from "react-router-dom";
import logo from "./white-logo.svg";
import linkImg from "./link-img.svg"

export default function Footer() {
  const scrollTopOnClick = () => {
    window.scroll({
      left: 0,
      top: 0,

    })
  }
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <Link onClick={scrollTopOnClick} className="footer_logo" to={'/wilni'}>
            <img src={logo} alt="logo" className="footer__logo-img" />
            <p className="footer__logo-description">благодійний фонд</p>
          </Link>
          <nav className="footer__nav">
            <Link onClick={scrollTopOnClick} className="footer__nav-link" to={'/about'}>ПРО ФОНД</Link>
            <Link onClick={scrollTopOnClick} className="footer__nav-link" to={'/news'}>НОВИНИ</Link>
            <Link onClick={scrollTopOnClick} className="footer__nav-link" to={'/reports'}>ЗВІТИ</Link>
          </nav>
          <nav className="footer__nav">
            <a onClick={scrollTopOnClick} href="a dont know" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" alt='img' />сторінка фонду </a>
            <a onClick={scrollTopOnClick} href="a dont know" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" alt='img' />сторінка Антитіла </a>
            <a onClick={scrollTopOnClick} href="a dont know" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" alt='img' />сторінка сторінка ` </a>
            <a onClick={scrollTopOnClick} href="a dont know" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" alt='img' />сторінка фонду` </a>
            <a onClick={scrollTopOnClick} href="a dont know" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" alt='img' />сторінка фонду` </a>
            <a onClick={scrollTopOnClick} href="a dont know" className="footer__nav-link-social"><img src={linkImg} className="footer__nav-link-social-img" alt='img' />сторінка фонду` </a>
          </nav>
          <div className="footer__about">
            <h3 className="footer__about-item">Контакти: </h3>
            <h3 className="footer__about-item">Дмитро Водовозов </h3>
            <a href="tel:+380730000000" className="footer__about-item">+38 (073) 000-00-00 </a>
            <a href="email:office@info.in.ua" className="footer__about-item">office@info.in.ua </a>
          </div>
        </div>

      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-left">© Antytila | Зареєстровано в Україні. Благодійний фонд «АНТИТІЛА»</div>
          <nav className="footer__bottom-right">
            <a href="home" className="footer__bottom-link">Політика конфіденційності</a>
            <a href="home" className="footer__bottom-link">Політика Cookies</a>
            <a href="home" className="footer__bottom-link">Публічна оферта</a>
          </nav>
        </div>
      </div>
    </footer >
  )
}
