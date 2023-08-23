import Promo from '../Promo/Promo';
import Header from '../Header/Header.js';
import AboutProject from '../AboutProject/AboutProject';

function Main({isLoggedIn }) {
  return (
    <main className="main">
      <Header
      />
      <Promo />
      <AboutProject />

    </main>
  );
}

export default Main
