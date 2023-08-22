import logo from '../../images/logo.png'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';


function Header({ isLoggedIn }) {


  return (
    <header className="header">
      <Link to="/" ><img className="logo" src={logo} alt="логотип"></img> </Link>


          <nav className='header__container'>
            <NavLink to="/signup"><button className='header__signup-button'>Регистрация</button></NavLink>
            <NavLink to="/signin"><button className='header__signin-button'>Войти</button></NavLink>
          </nav>


    </header>
  );
}

export default Header
