import './App.css';
import './components/css/u_common.css';
import './components/css/u_member.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';


// import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Header />
      {/* routes */}

      <Main />
      {/* <ErrorPage /> */}
      <Nav />
      {/* routes */}
      <Footer />
    </>
  );
}

export default App;
