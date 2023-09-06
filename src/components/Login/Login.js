import './Login.css';
import '../../components/Register/Register.css'
import logo from '../../images/logo.svg'
import { Link}  from 'react-router-dom';

function Login ({ onLogin}) {
  return (
    <main>
      <section className="register login">
        <Link to="/" className='register__logo-link' ><img className="logo" src={logo} alt="логотип"></img> </Link>
        <h1 className='register__heading'>Рады видеть!</h1>
        <form className='register__form'>
          <fieldset className="register__form-group">
            <label className="register__label" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder='Email' className ="register__input" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"/>
          </fieldset>
          <fieldset className="register__form-group">
            <label className="register__label" htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" required  placeholder='Пароль' minLength="2" maxLength="12" className ="register__input"/>
          </fieldset>
          <Link to="/movies"><button className='register__button' type='submit' onClick={onLogin}>Войти</button></Link>
        </form>
        <p className='register__text'>Ещё не зарегистрированы? <Link className='register__link' to='/signup'>Регистрация</Link></p>
      </section>
    </main>
  );
}

export default Login
