import './App.css';

import './components/css/u_common.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Header />
      {/* routes */}

      <Main />
      {/* <ErrorPage /> */}

      {/* routes */}
      <Footer />
    </>
  );
}

export default App;
