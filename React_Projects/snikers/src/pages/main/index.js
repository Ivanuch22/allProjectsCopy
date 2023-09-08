import Drawer from "../../component/Drawer"
import Header from "../../component/Header"
import style from "./style.module.scss"
const Main = ({ items, isDrawerOpen, priceAddedCards, changeDrawerStatus, addedCarts, input, showCartSearched, searchedCards, renderCards, onClick }) => {
  return (
    <div className='app' style={isDrawerOpen ? { overflow: "hidden" } : { overflow: "auto" }}>
      {isDrawerOpen ? <Drawer priceAddedCards={priceAddedCards} changeDrawerStatus={changeDrawerStatus} addedCarts={addedCarts} removeCart={(nameButton, card) => onClick(nameButton, card)} /> : null}
      <div className='wrapper'>
        <Header priceAddedCards={priceAddedCards} changeDrawerStatus={changeDrawerStatus} />
        <div className='content'>
          <div className={style.banner}>
            <div className={style.before} style={{ "backgroundImage": "url(img/adidasLogo.png)" }}></div>
            <div className={style.after} style={{ "backgroundImage": "url(img/bannerImg.jpg)" }}></div>
            <h2 className={style.title}><span className={style.span}>Stan Smith</span>,<br />
              Forever!</h2>
            <button className={style.button}>Купить</button>
          </div>
          <div className='content__top'>

            <div className='content__top-left'>
              <h1 className='content__top-title title'>Все кроссовки</h1>
            </div>
            <div className='content__top-right'>
              <input value={input} onChange={showCartSearched} className='content__top-input' type="text" placeholder='Поиск...' />
            </div>
          </div>
          <div className='content__main'>
            {input.length > 0 ? searchedCards.length > 0 ? renderCards(searchedCards) : <h2 className='nothingFound'>Нічого не знайдено</h2> : renderCards(items)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main