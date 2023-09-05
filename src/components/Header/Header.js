import logo from '../../images/logo.png'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ isLoggedIn }) {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsBurgerMenuOpen(false);
      setIsClosing(false);
    }, 800);
  };

  return (
    <header className="header">
      <Link to="/" ><img className="logo" src={logo} alt="логотип зелёное кольцо"></img> </Link>

      {!isLoggedIn &&
        (
          <nav className='header__container'>
            <NavLink to="/signup"><button className='header__signup-button' type='button'>Регистрация</button></NavLink>
            <NavLink to="/signin"><button className='header__signin-button' type='button'>Войти</button></NavLink>
          </nav>
        )
      }

      {isLoggedIn &&
        (
          <div className='header__movie-container'>
            <nav className='header__movie-navigation'>
              <Link to="/movies" className="header__movies-link">Фильмы</Link>
              <Link to="/saved-movies" className="header__savedmovies-link">Сохраненные фильмы</Link>
            </nav>
            <NavLink to="/profile" className='header__account-button'>Аккаунт</NavLink>
            <button className="header__burger-menu" onClick={handleBurgerMenuToggle} type='button'></button>
          </div>
        )
      }

      {isBurgerMenuOpen && <BurgerMenu
        isBurgerMenuOpen={isBurgerMenuOpen}
        isClosing = {isClosing}
        onCloseBurgerMenu={closeBurgerMenu}
      />}
    </header>
  );
}

export default Header
