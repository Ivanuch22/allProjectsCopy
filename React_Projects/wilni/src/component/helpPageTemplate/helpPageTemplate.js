import './helpPageTemplate.scss'
import RedButton from '../redButton/redButton'
import LinkTop from '../link/link'
export default function HelpPageTemplate({ title, firstDescription, img, backgroundColor, smallTitle, smallDescriptions, lastDescription }) {
  const descriptions = smallDescriptions.map((element, id) => <p key={id} className="helpArmy__right-description">{element} </p>)
  return (
    <main className="helpArmy">
      <LinkTop title={title} />
      <div className="helpArmy__buttons">
        <RedButton text="Підтримати" />
        <button className="button-transparent"> Регулярний донат</button>
      </div>
      <h1 className="helpArmy__title title">
        {title}
      </h1>
      <p className="helpArmy__description-top description ">
        {firstDescription}
      </p>
      <div className="container">
        <div className="helpArmy__row">
          <div className="helpArmy__row-left">
            <div className="helpArmy__row-left-block" style={{ backgroundImage: `url(${img})` }}>
            </div>
          </div>
          <div className="helpArmy__right" style={{ backgroundColor: backgroundColor }}>
            <h2 className="helpArmy__right-title">
              {smallTitle}
            </h2>
            {descriptions}
          </div>
        </div>
        <p className="helpArmy__description-bottom description">
          {lastDescription}
        </p>
      </div>
    </main>
  )

}