import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import MovieOne from '../../images/movie-one.png'
import MovieTwo from '../../images/movie-two.png'
import MovieThree from '../../images/movie-three.png'
import MovieFour from '../../images/movie-four.png'
import MovieFive from '../../images/movie-five.png'
import MovieSix from '../../images/movie-six.png'
import MovieSeven from '../../images/movie-seven.png'
import MovieEight from '../../images/movie-eight.png'
import MovieNine from '../../images/movie-nine.png'
import MovieTen from '../../images/movie-ten.png'
import MovieEleven from '../../images/movie-eleven.png'
import MovieTwelve from '../../images/movie-twelve.png'

function MoviesCardList() {

  return (
    <section className="movies__list">
      <div className='movies__container'>
      <MovieCard
        image={MovieOne}
        name="33 слова о дизайне"
        duration="1ч 17м"

      />
      <MovieCard
        image={MovieTwo}
        name="Киноальманах «100 лет дизайна»"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieThree}
        name="В погоне за Бенкси"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieFour}
        name="Баския: Взрыв реальности"
        duration="1ч 17м"
      />

      <MovieCard
        image={MovieFive}
        name="Бег это свобода"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieSix}
        name="Книготорговцы"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieSeven}
        name="Когда я думаю о Германии ночью"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieEight}
        name="Gimme Danger: История Игги и The Stooges"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieNine}
        name="Дженис: Маленькая девочка грустит"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieTen}
        name="Соберись перед прыжком"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieEleven}
        name="Пи Джей Харви: A dog called money"
        duration="1ч 17м"
      />
      <MovieCard
        image={MovieTwelve}
        name="По волнам: Искусство звука в кино"
        duration="1ч 17м"
      />
      </div>
      <button className='movies__more-button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList
