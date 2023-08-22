import Promo from '../Promo/Promo';
import Header from '../Header/Header.js';

function Main({isLoggedIn }) {
  return (
    <main className="main">
      <Header
      />
      <Promo />

    </main>
  );
}

export default Main
