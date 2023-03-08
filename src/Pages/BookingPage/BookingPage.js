import styles from '../Page.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import BookingForm from '../../Components/BookingForm/BookingForm';
import { useReducer } from 'react';

export default function BookingPage() {
  const initialTimes =[
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initialTimes
  );
  function updateTimes (availableTimes, action) {
    switch (action.type) {
      case "2023-03-13": {
        return [
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00"
        ];
      }
      default: {
        return [];
      }
    }
  }
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Header/>
        <Nav/>
      </div>
      <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} />
      <Footer/>
    </div>
  )
}
