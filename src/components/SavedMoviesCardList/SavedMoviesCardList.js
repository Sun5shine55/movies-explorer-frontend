import './SavedMoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import MovieOne from '../../images/movie-one.png'
import MovieTwo from '../../images/movie-two.png'
import MovieThree from '../../images/movie-three.png'

function SavedMoviesCardList() {

  return (
    <section className="movies saved-movies__list">
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
      </div>
    </section>
  );
}

export default SavedMoviesCardList
