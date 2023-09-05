import './Profile.css';
import Header from '../Header/Header.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile({ isLoggedIn, onLogin }) {

    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Наталья");
    const [email, setEmail] = useState("nutus@yandex.ru");

    const handleEditButtonClick = () => {
        setIsEditMode(!isEditMode);
    };

    const handleInputChange = (event) => {
        if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "email") {
            setEmail(event.target.value);
        }
    };

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
                onLogin={onLogin}
            />
            <main>
                <section className="profile">
                    <h1 className='profile__heading'>Привет,&nbsp;&nbsp;{name}!</h1>
                    <form className="profile__form">
                        <fieldset className="profile__inputs">
                            <div className="profile__input-container">
                                <label className="profile__label">Имя</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    minLength="2" maxLength="12"
                                    className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                                    value={name}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile__input-container">
                                <label className="profile__label">E-mail</label>
                                <input
                                    name="email"
                                    type="text"
                                    required
                                    pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                    className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                                    value={email}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </fieldset>
                        {isEditMode ? (
                            <button className='profile__save-button' onClick={handleEditButtonClick}>
                                Сохранить
                            </button>
                        ) : (<>
                            <button className='profile__edit-button' onClick={handleEditButtonClick}>
                                Редактировать
                            </button>
                            <button className='profile__logout-button'><Link className='profile__logout-link' to="/">Выйти из аккаунта</Link></button>
                        </>
                        )}
                    </form>
                </section>
                </main>
            </>
            );
}


            export default Profile
