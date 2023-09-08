import HelpPageTemplate from "../../helpPageTemplate/helpPageTemplate";
import earoImg from './images/aero.jpg'
export default function Aero() {
  window.scroll({
    left: 0,
    top: 0
  })
  return (
    <HelpPageTemplate
      title='Аеророзробка'
      firstDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus, suscipit nec enim sit amet, condimentum cursus felis. Quisque porttitor bibendum auctor.'
      img={earoImg}
      backgroundColor="#487194"
      smallTitle="Lorem ipsum dolor sit amet:"
      smallDescriptions={['Сучасні електронні засоби для нічного спостереження і водіння авто', 'Автівки і ремонт пошкоджених в бою транспортних', 'Автівки і ремонт пошкоджених в бою транспортних', 'Потужні засоби зв’язку і супутникові телефони', 'Тактична медицина', 'Амуніція, засоби захисту']}
      lastDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis finibus ante, id laoreet mi. Nullam vestibulum imperdiet tellus vitae tincidunt. Fusce metus risus, suscipit nec enim sit amet, condimentum cursus felis. Quisque porttitor bibendum auctor. Sed porta massa eros, a mollis sapien eleifend vitae. Aliquam hendrerit elementum purus ac mollis. Duis ullamcorper tortor a urna suscipit viverra. Quisque mattis, nunc ut tristique suscipit, felis sapien condimentum mi, sed hendrerit tortor diam sed dui. Phasellus lobortis sit amet lectus eu pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin bibendum molestie sem ac hendrerit. Suspendisse vestibulum, dolor nec mollis scelerisque, nisi est convallis dui, ac facilisis nunc nibh et nisl. Nam ultricies varius nibh, vitae volutpat quam bibendum vel. Maecenas commodo dolor metus, ut consequat enim vestibulum in. Etiam consectetur faucibus pretium. Sed dignissim egestas viverra. Duis in tincidunt mauris. Duis lacus nibh, scelerisque ac mauris non, tempus imperdiet leo. Mauris interdum cursus semper. Fusce eu lacus nisl.'
    />
  )
}