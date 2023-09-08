import './AboutMe.css';
import photo from '../../images/photo.jpg'
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <section className="student" id="student">
            <p className='student__title'>Студент</p>
            <div className='student__container'>
                <div className='student__info'>
                    <h2 className='student__name'>Наталья</h2>
                    <p className='student__profession'>Фронтенд-разработчик, 42 года</p>
                    <p className='student__text'>В 2003 году закончила обучение в городе Апатиты Мурманской области филиал Петрозаводского государственного университета по специальности "Информационные технологии".
                        Живу в городе Пскове. Мне нравится создавать красивые, интересные проекты и изучать новые технологии в Web разработке. Мечтаю развится в этой профессии и работать удаленно.</p>
                <Link to= "https://github.com/Sun5shine55" className='student__github' target="_blank">Github</Link>
                </div>
                <img className="student__photo" src={photo} alt="фото студента Яндекс Практикума"></img>
            </div>
        </section>
    );
}

export default AboutMe
