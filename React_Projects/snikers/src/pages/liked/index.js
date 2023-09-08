import Drawer from "../../component/Drawer"
import Header from "../../component/Header"
import { Link } from "react-router-dom";

import style from "./style.module.scss";

const LikedPage = ({ items, isDrawerOpen, priceAddedCards, changeDrawerStatus, addedCarts, input, showCartSearched, searchedCards, renderCards, onClick }) => {
  return (
    <div className='app' style={isDrawerOpen ? { overflow: "hidden" } : { overflow: "auto" }}>
      {isDrawerOpen ? <Drawer priceAddedCards={priceAddedCards} changeDrawerStatus={changeDrawerStatus} addedCarts={addedCarts} removeCart={(nameButton, card) => onClick(card, nameButton)} /> : null}
      <div className='wrapper'>
        <Header priceAddedCards={priceAddedCards} changeDrawerStatus={changeDrawerStatus} />
        <div className={`content ${style.content}`}>
          <div className='content__top'>
            <div className='content__top-left'>
              <h1 className='content__top-title title'>Вподобане</h1>
            </div>
            <div className='content__top-right'>
              <input value={input} onChange={showCartSearched} className='content__top-input' type="text" placeholder='Поиск...' />
            </div>
          </div>
          <div className='content__main'>
            {input.length > 0 ? searchedCards.length > 0 ? renderCards(searchedCards) : <h2 className='nothingFound'>Нічого не знайдено</h2> : items.length > 0 ? renderCards(items) : <NothingLiked />}
          </div>
        </div>
      </div>
    </div>
  )
}

const NothingLiked = () => {
  return (
    <div className={style.notFound}>
      <div className={style.img}>
        <img src="img/smalik.png" alt="smalik" />
      </div>
      <h2 className={style.title}>Закладок нет :(</h2>
      <p className={style.description}>Вы ничего не добавляли в закладки</p>
      <Link to="/">
        <button className={style.button}>Вернуться назад <img src="img/button-arrow-left.svg" /> </button>
      </Link>
    </div>
  )
}
export default LikedPage