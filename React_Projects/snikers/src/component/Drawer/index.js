import style from "./drawer.module.scss"
import React from "react"
const Drawer = ({ changeDrawerStatus, addedCarts, removeCart, priceAddedCards = 0 }) => {
  const [opened, setOpen] = React.useState(false);
  const closeDrawer = (e) => {
    if (e.target.className === style.drawer || e.target.className === `${style.nothingButton} ${style.button}` || e.target.className === `${style.drawer} ${style.modalWindowActive}`) {
      changeDrawerStatus()
    } else {
      return
    }
  }
  const taxCounter = (someNumber) => {
    return Math.floor(+someNumber / 100 * 5);
  }

  const Carts = addedCarts.map((cart, index) => {
    return (
      <div className={style.card} key={index} >
        <img className={style.cardImg} src={cart.img} />
        <div className={style.cardText}>
          <h2 className={style.cardTitle}>{cart.name}</h2>
          <p className={style.cardDescription}><span className={style.cardPrice}>{cart.price} руб.</span></p>
        </div>
        <div className={style.cardButton} onClick={() => removeCart("add", cart)}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
          </svg>
        </div>
      </div>
    )
  })

  const RenderCart = () => {
    return (
      <>
        <div className={style.sideBarContainer}>
          {Carts}
        </div>
        <div className={`${style.sideBarText} ${style.first}`}>Итого <span className={style.sideBarTextSpan}>{priceAddedCards()} руб.</span></div>
        <div className={`${style.sideBarText} ${style.second}`}>Налог 5%:  <span className={style.sideBarTextSpan}>{taxCounter(priceAddedCards())} руб. </span></div>
        <button onClick={() => { setOpen(true) }} className={style.button}>Оформить заказ</button>
      </>
    )

  }
  const NothingAdded = () => {
    return (
      <div className={style.nothingBox}>
        <img className={style.nothingImg} src="img/drawerBox.svg" />
        <h2 className={style.nothingTitle}>Корзина пустая</h2>
        <p className={style.nothingDescription}> Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        <div onClick={(e) => closeDrawer(e)} className={`${style.nothingButton} ${style.button}`}>Вернуться назад</div>
      </div>
    )
  }


  const TestModalPayment = () => {
    <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
      <input type="hidden" name="data" value="eyJwdWJsaWNfa2V5IjoiaTAwMDAwMDAwIiwidmVyc2lvbiI6IjMiLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIzIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6InRlc3QiLCJvcmRlcl9pZCI6IjAwMDAwMSJ9" />
      <input type="hidden" name="signature" value="wR+UZDC4jjeL/qUOvIsofIWpZh8=" />
      <input type="image" src="" />
    </form>
  }

  const Modal = () => {
    return (
      <div className={opened ? `${style.drawer} ${style.modalWindowActive}` : `${style.drawer} ${style.modalWindow}`}>
        <form className={style.modal}>
          <h2 className={style.modalTitle} >Оформити заказ</h2>
          <div className={style.inputsBlock}>
            <input className={style.input} type="text" placeholder="Прізвище" />
            <input className={style.input} type="text" placeholder="Ім’я" />
            <input className={style.input} type="text" placeholder="По-батькові" />
            <input className={style.input} type="text" placeholder="Номер телефону" />
            <input className={style.input} type="text" placeholder="Адрес доставки: місто, вулиця, номер квартири," />
          </div>
          <button className={style.button}>Оплатити замовлення</button>
        </form>
        <TestModalPayment />
      </div>
    )
  }

  return (
    <div className={style.drawer} onClick={(e) => closeDrawer(e)}>
      <div className={style.sideBar}>
        <h2 className={style.title}>Корзина</h2>
        {addedCarts.length > 0 ? <RenderCart /> : <NothingAdded />}
      </div>
      <Modal />
    </div>
  )
}
export default Drawer;