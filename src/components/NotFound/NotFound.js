import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main>
      <section className="not-found">
        <div className='not-found__container'>
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <Link to="/" className="back-button">Назад</Link>
      </section>
    </main>
  );
}

export default NotFound;
