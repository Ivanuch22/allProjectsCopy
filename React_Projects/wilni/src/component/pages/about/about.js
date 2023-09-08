import LinkTop from "../../link/link"
import mainPhoto from './images/mainPhoto.jpg'
import smallImg from "./images/smallImg.jpg"
import Banner from "../../banner/banner"
import firstBannerImg from "./images/firstBannerImg.jpg"
import secondBannerImg from "./images/secondBannerImg.jpg"
import thirdBannerImg from "./images/thirdBannerImg.jpg"
import './about.scss'
export default function About() {
  const title = "Про фонд"

  return (
    <main className="about">
      <div className="container">
        <LinkTop title={title} />
        <div className="about__container">
          <h1 className="about__title title">{title}</h1>
          <img className="about__img" src={mainPhoto} alt="картинка" />
          <p className="about__description description">
            <span className="red">Благодійний Фонд «АНТИТІЛА» </span> – некомерційна благодійна організація, заснована в м.Києві музикантами гурту Антитіла.
            Історія Фонду бере свій початок з волонтерського об”єднання громадян “Вільні UA”, яке навесні 2014 року почало збирати кошти, закуповувати і доставляти все необхідне безпосередньо на фронт, з метою підтримки українських громадян, задіяних у обороні України під час російської анексії Криму та війни на Донбасі.
            До об”єднання увійшли музиканти гурту «Антитіла» Тарас Тополя і Сергій Вусик, підприємець Катерина Нечаєва, режисер і письменник Руслан Горовий, а також друзі та небайдужі люди, які вважали своїм обов‘язком підтримувати Україну.
            Протягом наступних років волонтерське об”єднання розвинулося до повноцінного благодійного фонду. Об’єм наданої допомоги Збройним Силам України перевищив позначку в 8млн. грн, а сфера діяльності розширилася до мистецьких і гуманітарних проектів, таких як виставка у штаб-квартирі ООН “Ukraine EXIST” у 2015 році з метою поширення правди про війну в Україні закордоном, здійснюючи контрінформаційний супротив російській пропаганді.

            Сьогодні, під час широкомасштабної російської агресії проти України, музиканти гурту Антитіла з першого дня війни несуть службу у підрозділах 130 батальйону ТРО, а БФ «Антитіла» посилює свою роботу з допомоги Збройним Силам України, а також цивільним особам, <span className="red">і визначає три основних напрямки роботи:</span>
          </p>
          <p className="about__description-li description">Підтримка ЗСУ засобами захисту, розвідки і медицини.</p>
          <p className="about__description-li description">Підтримка ЗСУ засобами захисту, розвідки і медицини.</p>
          <p className="about__description-li description">Підтримка ЗСУ засобами захисту, розвідки і медицини.</p>
          <h2 className="about__title title">Наша команда</h2>
          <div className="about__row">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
              <h3 className="about__text-post">Засновник</h3>
              <h3 className="about__text-description">Фронтмен гурту Антитіла, спікер Молодіжної Ради при Президенті України, молодіжний Посол UNICEF в Україні (2019-2022), стрілець-парамедик
                130 батальйону ТРО.
              </h3>
            </div>
          </div>

        </div>
        <h2 className="about__title title"> Наглядова рада</h2>
        <div className="about__row more">
          <div className="about__collumn">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
              <h3 className="about__text-post">Засновник</h3>
              <h3 className="about__text-description">Фронтмен гурту Антитіла, спікер Молодіжної Ради при Президенті України, молодіжний Посол UNICEF в Україні (2019-2022), стрілець-парамедик
                130 батальйону ТРО.
              </h3>
            </div>
          </div>
          <div className="about__collumn">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
              <h3 className="about__text-post">Засновник</h3>
              <h3 className="about__text-description">Фронтмен гурту Антитіла, спікер Молодіжної Ради при Президенті України, молодіжний Посол UNICEF в Україні (2019-2022), стрілець-парамедик
                130 батальйону ТРО.
              </h3>
            </div>
          </div>
          <div className="about__collumn">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
              <h3 className="about__text-post">Засновник</h3>
              <h3 className="about__text-description">Фронтмен гурту Антитіла, спікер Молодіжної Ради при Президенті України, молодіжний Посол UNICEF в Україні (2019-2022), стрілець-парамедик
                130 батальйону ТРО.
              </h3>
            </div>
          </div>
          <div className="about__collumn">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
              <h3 className="about__text-post">Засновник</h3>
              <h3 className="about__text-description">Фронтмен гурту Антитіла, спікер Молодіжної Ради при Президенті України, молодіжний Посол UNICEF в Україні (2019-2022), стрілець-парамедик
                130 батальйону ТРО.
              </h3>
            </div>
          </div>
          <div className="about__collumn">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
              <h3 className="about__text-post">Засновник</h3>
              <h3 className="about__text-description">Фронтмен гурту Антитіла, спікер Молодіжної Ради при Президенті України, молодіжний Посол UNICEF в Україні (2019-2022), стрілець-парамедик
                130 батальйону ТРО.
              </h3>
            </div>
          </div>
          <div className="about__collumn">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
              <h3 className="about__text-post">Засновник</h3>
              <h3 className="about__text-description">Фронтмен гурту Антитіла, спікер Молодіжної Ради при Президенті України, молодіжний Посол UNICEF в Україні (2019-2022), стрілець-парамедик
                130 батальйону ТРО.
              </h3>
            </div>
          </div>
        </div>
        <div className="about__container">
          <h3 className="about__title title">Директор фонду</h3>
          <div className="about__row">
            <img className="about__img" src={smallImg} alt="img" />
            <div className="about__text">
              <h3 className="about__text-title">Тарас тополя</h3>
            </div>
          </div>
          <h3 className="about__title title">Напрямки діяльності та керівники</h3>

        </div>
        <div className="main__banner-block">
          <Banner linkToPage={'helpArmy'} linkToImg={firstBannerImg} title={"Допомога Збройним  Силам України "} />
          <Banner linkToPage={'helpChild'} linkToImg={secondBannerImg} title={"Допомога дітям"} description={"загиблих військових 130 батальйону ТрО"} />
          <Banner linkToPage={'aeroexposure'} linkToImg={thirdBannerImg} title={"аеророзробка"} description={'на розробку українських дронів та БПЛА'} />
        </div>
      </div>
    </main>
  )
}