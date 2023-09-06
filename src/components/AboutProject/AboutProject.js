import './AboutProject.css';

function AboutProject () {
    return (
      <section className="about" id="about">
        <p className='about__title'>О проекте</p>
        <div className='about__description'>
            <div className ='about__block'>
            <p className='about__duration'>Дипломный проект включал 5 этапов</p>
            <p className='about__work-plan'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className ='about__block'>
            <p className='about__duration'>На выполнение диплома ушло 5 недель</p>
            <p className='about__work-plan'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className='about__time'>
            <div className='about__time-backend'>1 неделя</div>
            <div className='about__time-frontend'>4 недели</div>
            <p className='about__time-for'>Back-end</p>
            <p className='about__time-for'>Front-end</p>
        </div>
      </section>
    );
  }

  export default AboutProject
