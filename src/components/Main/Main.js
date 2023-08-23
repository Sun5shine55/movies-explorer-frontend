import Promo from '../Promo/Promo';
import Header from '../Header/Header.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main({isLoggedIn }) {
  return (
    <main className="main">
      <Header
      />
      <Promo />
      <AboutProject />
      <Techs />

    </main>
  );
}

export default Main
