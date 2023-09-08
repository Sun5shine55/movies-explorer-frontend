import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__links'>
          <li className='footer__links-item'>
            <Link to="https://practicum.yandex.ru/" className='footer__link' target="_blank">Яндекс.Практикум</Link>
          </li>
          <li className='footer__links-item'>
            <Link to="https://github.com/" className='footer__link' target="_blank">Github</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
