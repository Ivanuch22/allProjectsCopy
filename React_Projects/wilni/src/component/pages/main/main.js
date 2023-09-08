import { Link } from "react-router-dom"
import Banner from "../../banner/banner"
import firstBannerImg from "./bannerImages/firstBannerImg.jpg"
import secondBannerImg from "./bannerImages/secondBannerImg.jpg"
import thirdBannerImg from "./bannerImages/thirdBannerImg.jpg"
import aboutImg from "./bannerImages/about.jpg"
import firstRowImg from "./bannerImages/rowFirstImg.jpg"
import secondRowImg from "./bannerImages/rowSecondImg.jpg"
import thirdRowImg from "./bannerImages/rowThirdImg.jpg"
import forthRowImg from "./bannerImages/rowForthImg.jpg"
import secondSlide from "./bannerImages/secondSlide.jpg"
import prevArrow from "./bannerImages/prev-arrow.svg"
import nextArrow from "./bannerImages/next-arrow.svg"
import { Navigation, Pagination, FreeMode, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./main.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__banner-block">
          <Banner linkToPage={'helpArmy'} linkToImg={firstBannerImg} title={"Допомога Збройним  Силам України "} />
          <Banner linkToPage={'helpChild'} linkToImg={secondBannerImg} title={"Допомога дітям"} description={"загиблих військових 130 батальйону ТрО"} />
          <Banner linkToPage={'aeroexposure'} linkToImg={thirdBannerImg} title={"аеророзробка"} description={'на розробку українських дронів та БПЛА'} />
        </div>
        <Swiper className="main__slider"
          modules={[Navigation, Pagination, FreeMode]}
          spaceBetween={32}
          loop={true}
          navigation={{ prevEl: '.main__slide-prev', nextEl: ".main__slide-next" }}
          pagination={{ clickable: true }}
          centeredSlides
          autoHeight
        >
          <SwiperSlide className="main__slide">
            <div className="main__slide-img-block">
              <img className="main__slide-img" alt="slider-img" src={secondSlide} />
              <div className="main__slide-prev">
                <img src={prevArrow} />
              </div>
              <div className="main__slide-next">
                <img src={nextArrow} />
              </div>
            </div>
            <div className="main__slide-text">
              <div className="main__slide-time">17.07.2022</div>
              <div className="main__slide-title">24-го лютого 2022 року російська армія здійснила напад на Україну</div>
              <div className="main__slide-description">Вся Україна об’єдналась заради миру та навколо спільної справи - допомоги потребуючим, нашим захисникам, захисту рідного міста та держави.</div>
              <div className="main__slide-link">Хронологія подій з 1-го дня</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="main__slide">
            <div className="main__slide-img-block">
              <img className="main__slide-img" alt="slider-img" src={secondSlide} />
              <div className="main__slide-prev">
                <img src={prevArrow} />
              </div>
              <div className="main__slide-next">
                <img src={nextArrow} />
              </div>
            </div>
            <div className="main__slide-text">
              <div className="main__slide-time">17.07.2022</div>
              <div className="main__slide-title">24-го лютого 2022 року російська армія здійснила напад на Україну</div>
              <div className="main__slide-description">Вся Україна об’єдналась заради миру та навколо спільної справи - допомоги потребуючим, нашим захисникам, захисту рідного міста та держави.</div>
              <div className="main__slide-link">Хронологія подій з 1-го дня</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="main__slide">
            <div className="main__slide-img-block">
              <img className="main__slide-img" alt="slider-img" src={secondSlide} />
              <div className="main__slide-prev">
                <img src={prevArrow} />
              </div>
              <div className="main__slide-next">
                <img src={nextArrow} />
              </div>
            </div>
            <div className="main__slide-text">
              <div className="main__slide-time">17.07.2022</div>
              <div className="main__slide-title">24-го лютого 2022 року російська армія здійснила напад на Україну</div>
              <div className="main__slide-description">Вся Україна об’єдналась заради миру та навколо спільної справи - допомоги потребуючим, нашим захисникам, захисту рідного міста та держави.</div>
              <div className="main__slide-link">Хронологія подій з 1-го дня</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="main__slide">
            <div className="main__slide-img-block">
              <img className="main__slide-img" alt="slider-img" src={secondSlide} />
              <div className="main__slide-prev">
                <img src={prevArrow} />
              </div>
              <div className="main__slide-next">
                <img src={nextArrow} />
              </div>
            </div>
            <div className="main__slide-text">
              <div className="main__slide-time">17.07.2022</div>
              <div className="main__slide-title">24-го лютого 2022 року російська армія здійснила напад на Україну</div>
              <div className="main__slide-description">Вся Україна об’єдналась заради миру та навколо спільної справи - допомоги потребуючим, нашим захисникам, захисту рідного міста та держави.</div>
              <div className="main__slide-link">Хронологія подій з 1-го дня</div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="main__about">
          <div className="main__column">
            <h1 className="main__title title">Про фонд</h1>
            <p className="main__description description"> <span className="red">Благодійний Фонд «АНТИТІЛА»</span>  – некомерційна благодійна організація, заснована в м.Києві музикантами гурту Антитіла. Сьогодні, під час широкомасштабної російської агресії проти України, музиканти гурту Антитіла з першого дня війни несуть службу у підрозділах 130 батальйону ТРО, а БФ «Антитіла» посилює свою роботу з допомоги Збройним Силам України, а також цивільним особам, і визначає <span className="red">три основних напрямки роботи:</span></p>
            <p className="main__description main__description-li description  ">Підтримка ЗСУ засобами захисту, розвідки і медицини.</p>
            <p className="main__description main__description-li description  ">Підтримка дітей та сімей загиблих військових.</p>
            <p className="main__description main__description-li description  ">Фінансування інноваційних військових розробок у галузі робототехніки та авіабудування</p>
            <Link to={'/about'}>
              <button className="main__button button-transparent">докладніше</button>
            </Link>
          </div>
          <div className="main__column">
            <img src={aboutImg} alt='main-about' className="main__img" />
          </div>
        </div>

      </div>
      <div className="main__row">
        <div className="main__row-block">
          <img alt="img" src={secondRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">1,1+</div>
            <div className="main__row-text-title">МЛН ГРН</div>
            <div className="main__row-text-description">закуплено для  українського війська</div>
          </div>
        </div>
        <div className="main__row-block">
          <img alt="img" src={firstRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">500+</div>
            <div className="main__row-text-title">ЗАСОБІВ ТАКТИЧНОЇ АМУНІЦІЇ</div>
            <div className="main__row-text-description">зібрано на потреби армії
              з 2014 року</div>
          </div>
        </div>

        <div className="main__row-block">
          <img alt="img" src={thirdRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">200+</div>
            <div className="main__row-text-title">ТОН ГУМАНІТАРНОЇ ДОПОМОГИ</div>

            <div className="main__row-text-description">доставлено від початку
              повномасштабного вторгнення</div>
          </div>
        </div>
        <div className="main__row-block">
          <img alt="img" src={forthRowImg} className="main__img" />
          <div className="main__row-text-block">
            <div className="main__row-text-number">100+</div>
            <div className="main__row-text-title">комплекти аптечок</div>

            <div className="main__row-text-description">доставлено від початку
              повномасштабного вторгнення</div>
          </div>
        </div>
      </div>
    </main >
  )
}




