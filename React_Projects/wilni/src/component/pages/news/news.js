import LinkTop from "../../link/link"
import newsImg from './images/mainPhoto.jpg'
import arrow from './images/arrow.svg'
import { Link } from "react-router-dom"
import './news.scss'
export default function News() {
  const title = "Новини"
  return (
    <main className="news">
      <div className="container">
        <LinkTop title={title} />
        <h1 className="news__title title">{title}</h1>
        <div className="news__container">
          <div className="news__content">
            <Link to={'/wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>
            <Link to={'wilni'}>
              <div className="news__column">
                <img className="news__img" src={newsImg} alt="newsImg" />
                <h3 className="news__title-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, orci vitae vehicula malesuada.</h3>
                <span className="news__time">17.07.2022</span>
              </div>
            </Link>


          </div>
          <div className="news__row">
            <div className="news__arrow">
              <img className="news__arrow-img prev" src={arrow} />
            </div>
            <div className="news__button news__button--active">1</div>
            <div className="news__button news__button">2</div>
            <div className="news__button news__button">3</div>
            <div className="news__arrow">
              <img className="news__arrow-img next" src={arrow} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}