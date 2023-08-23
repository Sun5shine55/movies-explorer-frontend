import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <section className="portfolio">
            <p className='portfolio__title'>Портфолио</p>
            <Link to="https://github.com/Sun5shine55/how-to-learn" className='portfolio__link' target="_blank">
                <p className='portfolio__page-type'>Статичный сайт</p>
                <div className='porfolio__icon'>↗</div>
            </Link>
            <Link to="https://github.com/Sun5shine55/russian-travel" className='portfolio__link' target="_blank">
                <p className='portfolio__page-type'>Адаптивный сайт</p>
                <div className='porfolio__icon'>↗</div>
            </Link>
            <Link to="https://github.com/Sun5shine55/react-mesto-auth" className='portfolio__link' target="_blank">
                <p className='portfolio__page-type'>Одностраничное приложение</p>
                <div className='porfolio__icon'>↗</div>
            </Link>
        </section>
    );
}

export default Portfolio
