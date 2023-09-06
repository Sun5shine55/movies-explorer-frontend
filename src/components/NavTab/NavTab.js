import './NavTab.css';

function NavTab () {

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item"><button className='navtab__button' type='button' onClick={() => scrollToSection('about')}>О проекте</button></li>
        <li className="navtab__list-item"><button className='navtab__button' type='button' onClick={() => scrollToSection('techs')}>Технологии</button></li>
        <li className="navtab__list-item"><button className='navtab__button' type='button' onClick={() => scrollToSection('student')}>Студент</button></li>
      </ul>
    </nav>
  );
}

export default NavTab
