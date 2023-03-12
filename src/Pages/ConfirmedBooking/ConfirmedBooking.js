import styles from '../Page.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import styles2 from './ConfirmedBooking.module.css';

export default function ConfirmedBooking() {

  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Header/>
        <Nav/>
      </div>
      <h1 className={`displayTitle ${styles2.heroBackground}`}>
        Booking confirmed!
      </h1>
      <Footer/>
    </div>
  )
}
