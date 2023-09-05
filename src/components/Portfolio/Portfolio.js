import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio">
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <Link to="https://github.com/Sun5shine55/how-to-learn" className='portfolio__link' target="_blank">
            <p className='portfolio__page-type'>Статичный сайт</p>
            <div className='portfolio__icon'>↗</div>
          </Link>
        </li>
        <li className='portfolio__list-item'>
          <Link to="https://github.com/Sun5shine55/russian-travel" className='portfolio__link' target="_blank">
            <p className='portfolio__page-type'>Адаптивный сайт</p>
            <div className='portfolio__icon'>↗</div>
          </Link>
        </li>
        <li className='portfolio__list-item'>
          <Link to="https://github.com/Sun5shine55/react-mesto-auth" className='portfolio__link-last' target="_blank">
            <p className='portfolio__page-last'>Одностраничное приложение</p>
            <div className='portfolio__icon'>↗</div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio
