import styles from './App.module.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Main';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Header/>
        <Nav/>
      </div>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
