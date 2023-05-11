import './App.css';

import './components/css/u_common.css';

import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import Purchase from './components/nav/cart/Purchase';


// import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Header />
      {/* routes */}

      <Purchase/>
      {/* <Main /> */}
      {/* <ErrorPage /> */}

      {/* routes */}
      <Footer />
    </>
  );
}

export default App;
