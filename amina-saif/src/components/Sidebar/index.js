import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/logo-am.png'
import LogoSubtitle from '../../assets/images/logo-amina.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className ='logo' to = '/'>
        <img src={LogoA} alt="logo"/>
        <img className='sub-logo' src={LogoSubtitle} alt="slobodan"/>
     </Link>
     <nav>
     <NavLink exact="true" actiiveclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
     </NavLink>
     <NavLink exact="true" actiiveclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
     </NavLink>
     <NavLink exact="true" actiiveclassname="active" className="contact-link"  to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
     </NavLink>
     </nav>
  </div>
)
export default Sidebar
