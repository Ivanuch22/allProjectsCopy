import home from './images/homeIcon.svg'
import arrrow from './images/arrowIcon.svg'
import './link.scss'
import { Link } from 'react-router-dom'
export default function LinkTop({ title }) {
  return (
    <div className='link-block'>
      <Link className='link' to={'/wilni'} >
        <img className='link__img' src={home} />
        <img className='link__img' src={arrrow} />
      </Link>
      {title}
    </div>
  )
} 