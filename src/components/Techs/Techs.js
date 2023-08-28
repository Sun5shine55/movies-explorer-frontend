import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <p className='techs__title'>Технологии</p>
      <div className='techs__container'>
        <h2 className='techs__container-title'>7 технологий</h2>
        <p className='techs__container-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__block'>
          <div className='techs__block-item'>HTML</div>
          <div className='techs__block-item'>CSS</div>
          <div className='techs__block-item'>JS</div>
          <div className='techs__block-item'>React</div>
          <div className='techs__block-item'>Git</div>
          <div className='techs__block-item'>Express.js</div>
          <div className='techs__block-item'>MongoDB</div>
        </div>
      </div>
    </section>
  );
}

export default Techs
