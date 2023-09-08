import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <p className='techs__title'>Технологии</p>
      <div className='techs__container'>
        <h2 className='techs__container-title'>7 технологий</h2>
        <p className='techs__container-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__block'>
          <li className='techs__block-item'>HTML</li>
          <li className='techs__block-item'>CSS</li>
          <li className='techs__block-item'>JS</li>
          <li className='techs__block-item'>React</li>
          <li className='techs__block-item'>Git</li>
          <li className='techs__block-item'>Express.js</li>
          <li className='techs__block-item'>MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs
