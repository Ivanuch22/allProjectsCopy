import HelpPageTemplate from "../../helpPageTemplate/helpPageTemplate";
import helpChildrenImg from "./images/helpChildren.jpg"
import deadImg from './images/deadImage.jpg'
import { Link, Outlet } from "react-router-dom";
import './helpChildren.scss'
import { useState, useEffect } from "react";
export default function HelpChildren({ setNewImg }) {
  window.scroll({
    left: 0,
    top: 0
  })
  setNewImg(deadImg);

  return (
    <>
      <HelpPageTemplate
        title='Допомога дітям'
        firstDescription='В Україну прийшла жахлива і несправедлива війна, пережити яку випало на долю мільйонів українських дітей.
                        Долю і життя сотень українських дітей війна, на жаль, обірвала назавжди. 
                        У багатьох забрала батьків.
'
        img={helpChildrenImg}
        backgroundColor="#9D5E68"
        smallTitle='Українські діти потребують:'
        smallDescriptions={['ілдфваофждіолвасчт фліфдіоваушйщкв', 'Автівки і ремонт пошкоджених в бою транспортних', 'Автівки і ремонт пошкоджених в бою транспортних', 'Потужні засоби зв’язку і супутникові телефони', 'Тактична медицина', 'Амуніція, засоби захисту']}
        lastDescription='Музиканти гурту Антитіла служать в 130 Батальйоні Територіальної Оборони. Від початку повномасштабного вторгнення російських окупантів в Україну, підрозділ виконує бойові завдання на передовій.
Багато військовослужбовців було важко поранено і вбито російськими снарядами й кулями. У багатьох із них залишилися діти. 
Батальйоне Братерство зобов’язалося допомагати і підтримувати дітей загиблих побратимів 130 Батальйону ТРО.
Освіта, медицина, гроші, подарунок до Дня Святого Миколая чи на День Народження, чоловіче плече, турпохід або ж проста, вчасна порада - це те, що мав зробити батько для своїх дітей, але загинув захищаючи їх майбутнє. 
Тож тепер БФ «Антитіла» й побратими загиблих Героїв взяли на себе цю відповідальну місію.

Підтримайте дітей загиблих.' />
      <h2 className="child__title title">Загиблі бійці 130 батальйону ТрО</h2>
      <div className="child__row">
        <div className="child__collumn">
          <div className="child__collumn-img" style={{ backgroundImage: `url(${deadImg})` }}></div>
          <div className="child__collumn-text">
            <div className="child__collun-title">прізвище ім'я по батькові  </div>
            <div className="child__collun-date">00.00.0000 - 00.00.0000</div>
            <div className="child__collun-post">Посада у Батальйоні  </div>
            <div className="child__collun-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus.  </div>
          </div>
        </div>
        <div className="child__collumn">
          <div className="child__collumn-img" style={{ backgroundImage: `url(${deadImg})` }}></div>
          <div className="child__collumn-text">
            <div className="child__collun-title">прізвище ім'я по батькові  </div>
            <div className="child__collun-date">00.00.0000 - 00.00.0000</div>
            <div className="child__collun-post">Посада у Батальйоні  </div>
            <div className="child__collun-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus.  </div>
          </div>
        </div>
      </div>
      <div className="child__row">
        <div className="child__collumn">
          <div className="child__collumn-img" style={{ backgroundImage: `url(${deadImg})` }}></div>
          <div className="child__collumn-text">
            <div className="child__collun-title">прізвище ім'я по батькові  </div>
            <div className="child__collun-date">00.00.0000 - 00.00.0000</div>
            <div className="child__collun-post">Посада у Батальйоні  </div>
            <div className="child__collun-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus.  </div>
          </div>
        </div>
        <div className="child__collumn">
          <div className="child__collumn-img" style={{ backgroundImage: `url(${deadImg})` }}></div>
          <div className="child__collumn-text">
            <div className="child__collun-title">прізвище ім'я по батькові  </div>
            <div className="child__collun-date">00.00.0000 - 00.00.0000</div>
            <div className="child__collun-post">Посада у Батальйоні  </div>
            <div className="child__collun-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus.  </div>
          </div>
        </div>
      </div>
      <div className="child__row">
        <div className="child__collumn">
          <div className="child__collumn-img" style={{ backgroundImage: `url(${deadImg})` }}></div>
          <div className="child__collumn-text">
            <div className="child__collun-title">прізвище ім'я по батькові  </div>
            <div className="child__collun-date">00.00.0000 - 00.00.0000</div>
            <div className="child__collun-post">Посада у Батальйоні  </div>
            <div className="child__collun-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus.  </div>
          </div>
        </div>
        <div className="child__collumn">
          <div className="child__collumn-img" style={{ backgroundImage: `url(${deadImg})` }}></div>
          <div className="child__collumn-text">
            <div className="child__collun-title">прізвище ім'я по батькові  </div>
            <div className="child__collun-date">00.00.0000 - 00.00.0000</div>
            <div className="child__collun-post">Посада у Батальйоні  </div>
            <div className="child__collun-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus.  </div>
          </div>
        </div>
      </div>
      <Outlet img={deadImg} />
      <Link className="child__button-more button-transparent" to={"moreInfo"} >показати більше</Link>
    </>
  )
}
