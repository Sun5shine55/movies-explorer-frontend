import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { moviesApi } from '../../utils/MoviesApi.js';
import { mainApi } from '../../utils/MainApi.js';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import { SavedMoviesContext } from '../Contexts/SavedMoviesContext.js';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import ResultPopup from '../ResultPopup/ResultPopup';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)                     //  состояние пользователя залогинен или нет
  const [currentMovies, setCurrentMovies] = useState([])                //  данные текущих фильмов
  const [currentUser, setCurrentUser] = useState({})                    //  данные текущего пользователя
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);    //  состояние чекбокса
  const [filteredMovies, setFilteredMovies] = useState([]);             //  отфильтрованные фильмы
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);   //  отфильтрованные сохранённые фильмы
  const [isSubmitted, setIsSubmitted] = useState(false);                //  состояние отправки запроса поиска фильмов
  const [isLoading, setIsLoading] = useState(false);                    //  состояние загрузки - Preloader
  const [savedMovies, setSavedMovies] = useState([]);                   //  данные сохранённых фильмов
  const [searchTerm, setSearchTerm] = useState('');                     //  строка поискового запроса фильмов

  const [searchTermSavedMovies, setSearchTermSavedMovies] = useState('');
  const [isSavedMoviesCheckboxChecked, setIsSavedMoviesCheckboxChecked] = useState(false);

  const [isSuccessfullSign, setIsSuccessfullSign] = useState(false);
  const [isResultPopupOpen, setIsResultPopupOpen] = useState(false);

  const navigate = useNavigate()
  const location = useLocation();

  const isMoviesRoute = location.pathname === '/movies';

  function handleResultPopupOpen() {       //всплытие успешного попапа в случае успешного входа
    setIsResultPopupOpen(true);
  }
  function handleResultPopupClose() {      //всплытие неуспешного попапа в случае неуспешной регистрации
    setIsResultPopupOpen(false)
  }

  function handleUpdateUser(name, email) {        //изменение данных пользователя
    mainApi.editUserData(name, email)
      .then((data) => {
        console.log(data)
        setIsSuccessfullSign(true);
        setCurrentUser(data);
        handleResultPopupOpen()
      })
      .catch(err => {
        console.log(err.message)
        setIsSuccessfullSign(false)
        handleResultPopupOpen()
      })
  }

  function handleLogin(email, password) {       //логин пользователя
    mainApi.authorize(email, password)
      .then(() => {
        setLoggedIn(true)
        navigate('/movies')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  function handleRegister(name, email, password) {     //регистрация  пользователя
    mainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  function verifyToken() {      //проверка токена на  сервере
    mainApi.checkToken()
      .then((data) => {
        if (data) {
          setLoggedIn(true)
          navigate('/movies')
        }
        else {
          setLoggedIn(false)
        }
      })
      .catch(err => {
        setLoggedIn(false)
        console.log(err.message)
      })
  }

  //ФУНКЦИИ С КАРТОЧКАМИ ФИЛЬМОВ

  function addMovie(movie) {        //добавление фильма в сохранённые

    mainApi.addMovies({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function deleteMovie(id) {                                       //удаление из сохранённых  фильмов
    const movieToDelete = savedMovies.find((movie) => {
      return location.pathname === '/movies' ? movie.movieId === id : movie._id === id;
    });
    if (!movieToDelete) {
      return;
    }
    mainApi.deleteMovies(movieToDelete._id).then(() => {
      if (location.pathname === '/movies') {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((movie) => movie.movieId !== id));
      } if (location.pathname === '/saved-movies') {
        setSavedMovies((savedMovies) => savedMovies.filter((movie) => movie._id !== id)
        );
      }
    }).catch((err) => {
      console.log(err.message);
    });
  }

  useEffect(() => {
    if (isSubmitted) {         //получение фильмов от Beatfilm
      moviesApi.getMovies()
      .then((data) => {
        setIsLoading(true);
        setCurrentMovies(data)
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  }, [isSubmitted])

  useEffect(() => {           //получение пользовательских данных
    if (isLoggedIn) {
      mainApi.getUserData(currentUser)
        .then((data) => {
          setCurrentUser(data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  useEffect(() => {            //получение сохранённых фильмов
    if (isLoggedIn) {
      mainApi.getSavedMovies(currentUser._id)
        .then((movies) => {
          setSavedMovies(movies)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  function clearUserInfo() {        //очистка данных пользователя и фильмов после logout
    setLoggedIn(false);
    setCurrentUser({
      name: '',
      email: '',
    });
    setFilteredMovies([])
    setIsSubmitted(false);
    setSearchTerm('');
    setIsCheckboxChecked(false);
  }

  function handleSignOut() {        //logout
    localStorage.clear()
    mainApi.logout()
      .then(() => {
        clearUserInfo()
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message)
      })
  }


  const handleIsSubmitted = () => {
    setIsSubmitted(true);
  }

  const changeCheckBox = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  }

  const changeSavedMoviesCheckBox = () => {
    setIsSavedMoviesCheckboxChecked(!isSavedMoviesCheckboxChecked);
  }
  const handleSearchCurrentMovies = () => {

    const filteredMovies = currentMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!isCheckboxChecked || movie.duration <= 40)
    );
    handleSubmitForm(filteredMovies)
  };

  const handleSearchSavedMovies = () => {

    const filteredSavedMovies = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchTermSavedMovies.toLowerCase()) &&
        (!isSavedMoviesCheckboxChecked || movie.duration <= 40)
    );
    handleSubmitSavedMoviesForm(filteredSavedMovies);
  }

  const handleSubmitForm = (filteredMovies) => {
    setFilteredMovies(filteredMovies);
  };

  const handleSubmitSavedMoviesForm = (filteredMovies) => {
    setFilteredSavedMovies(filteredMovies);
  };

  const handleChangeCurrentMovies = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChangeSavedMovies = (e) => {
    setSearchTermSavedMovies(e.target.value);
  };

  const handleSubmitCurrentMovies = (e) => {
    e.preventDefault();
    handleSearchCurrentMovies();
    handleIsSubmitted();
  };

  const handleSubmitSavedMovies = (e) => {
    e.preventDefault();
    handleSearchSavedMovies()
    handleIsSubmitted();
  };

  useEffect(() => {
    verifyToken()
    saveResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function saveResults() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    const savedIsCheckboxChecked = localStorage.getItem('isCheckboxChecked');
    const savedFilteredMovies = localStorage.getItem('filteredMovies');
    const savedCurrentMovies = localStorage.getItem('currentMovies');
    const savedisSubmitted = localStorage.getItem('isSubmitted');

    if (savedSearchTerm && savedIsCheckboxChecked && savedFilteredMovies && savedCurrentMovies && savedisSubmitted) {
      setSearchTerm(savedSearchTerm);
      setIsCheckboxChecked(JSON.parse(savedIsCheckboxChecked));
      setFilteredMovies(JSON.parse(savedFilteredMovies));
      setCurrentMovies(JSON.parse(savedCurrentMovies));
      setIsSubmitted(JSON.parse(savedisSubmitted));
    }
  }

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('isCheckboxChecked', isCheckboxChecked);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('currentMovies', JSON.stringify(currentMovies));
    localStorage.setItem('isSubmitted', JSON.stringify(isSubmitted));
  }, [searchTerm, isCheckboxChecked, filteredMovies, currentMovies, isSubmitted]);



  useEffect(() => {
    handleSearchSavedMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSavedMoviesCheckboxChecked, savedMovies])

  useEffect(() => {
    handleSearchCurrentMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckboxChecked, currentMovies])
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={{ savedMovies }}>
        <div className="App">

          <Routes>

            <Route path="/" element={<Main
              isLoggedIn={isLoggedIn}
            />} />

            <Route path="/movies" element={<ProtectedRoute element={

              <Movies
                currentMovies={currentMovies}
                isCheckboxChecked={isCheckboxChecked}
                onCheckboxChange={changeCheckBox}
                isLoggedIn={isLoggedIn}
                onSubmit={handleSubmitCurrentMovies}
                filteredMovies={filteredMovies}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
                onAddMovie={addMovie}
                onDeleteMovie={deleteMovie}
                onIsSubmitted={handleIsSubmitted}
                setIsLoading={setIsLoading}
                onChange={handleChangeCurrentMovies}
                searchTerm={searchTerm}
                isMoviesRoute={isMoviesRoute}

              />} isLoggedIn={isLoggedIn} />} />

            <Route path="/saved-movies" element={<ProtectedRoute element={

              <SavedMovies
                savedMovies={savedMovies}
                isCheckboxChecked={isSavedMoviesCheckboxChecked}
                onCheckboxChange={changeSavedMoviesCheckBox}
                filteredMovies={filteredSavedMovies}
                isLoggedIn={isLoggedIn}
                isSubmitted={isSubmitted}
                onSubmit={handleSubmitSavedMovies}
                onDeleteMovie={deleteMovie}
                onIsSubmitted={setIsSubmitted}
                setIsLoading={setIsLoading}
                onChange={handleChangeSavedMovies}
                searchTerm={searchTermSavedMovies}
              />} isLoggedIn={isLoggedIn} />} />

            <Route path="/profile" element={<ProtectedRoute element={

              <Profile
                isLoggedIn={isLoggedIn}
                handleUpdateUser={handleUpdateUser}
                onSignOut={handleSignOut}


              />} isLoggedIn={isLoggedIn} />} />

            <Route path="/signup" element={<Register
              onRegister={handleRegister}
            />} />

            <Route path="/signin" element={<Login
              onLogin={handleLogin}
            />} />

            <Route path="/*" element={< NotFound
            />} />

          </Routes>

          <ResultPopup
            isOpen={isResultPopupOpen}
            isSuccessfull={isSuccessfullSign}
            onClose={handleResultPopupClose}
          />
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
