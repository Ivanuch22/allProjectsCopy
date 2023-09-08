import { Link } from "react-router-dom"
import "./banner.scss"
export default function Banner({ linkToPage, linkToImg, title = null, description = null }) {
  return (
    <Link to={`/${linkToPage}`} className={'main__banner-item'}>
      <div className="banner">
        <img src={linkToImg} className="banner__img" alt="help army" />
        <div className="banner__text-block">
          <h2 className="banner__title">{title}</h2>
          <p className="banner__description">{description}</p>
        </div>
      </div>
    </Link>
  )
}