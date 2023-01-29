import styles from './App.module.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

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
