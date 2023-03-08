import styles from '../Page.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import BookingForm from '../../Components/BookingForm/BookingForm';

export default function BookingPage() {
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Header/>
        <Nav/>
      </div>
      <BookingForm/>
      <Footer/>
    </div>
  )
}
