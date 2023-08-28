import './BurgerMenu.css';
import { Link } from 'react-router-dom';

function BurgerMenu ({isBurgerMenuOpen, onCloseBurgerMenu, isClosing}) {

    const handleBurgerMenuClose = () => {
        onCloseBurgerMenu();
      };

    return (
        <div className={`burgermenu__overlay ${isBurgerMenuOpen ? "burgermenu__overlay_opened" : ""}`}>
        <div className={`burgermenu ${isBurgerMenuOpen ? 'burgermenu_opened' : ''} ${isClosing ? 'burgermenu_closing' : ''}`}>
        <div className='burgermenu__close-icon' onClick={handleBurgerMenuClose}></div>
        <div className='burgermenu__navigation'>
            <Link className='burgermenu__link' to="/">Главная</Link>
            <Link className='burgermenu__link' to="/movies">Фильмы</Link>
            <Link className='burgermenu__link' to="/saved-movies">Сохраненные Фильмы</Link>
        </div>
        <Link to="/profile" className='burgermenu__account-button'>Аккаунт</Link>
        </div>
      </div>
    );
  }

  export default BurgerMenu
