import styles from '../Page.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Nav from '../../Components/Nav/Nav';
import Specials from '../../Components/Specials/Specials';
import Testimonials from '../../Components/Testimonials/Testimonials';
import About from '../../Components/About/About';

export default function HomePage() {
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Header/>
        <Nav/>
      </div>
      <Main/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  )
}