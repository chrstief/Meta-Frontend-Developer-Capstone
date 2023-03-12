import styles from '../Page.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import BookingForm from '../../Components/BookingForm/BookingForm';
import { useReducer } from 'react';
import {fetchAPI} from "../../api";

export default function BookingPage() {

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  function initializeTimes(){
    const today = new Date();
    return fetchAPI(today);
  }
  function updateTimes (availableTimes,action) {
    return fetchAPI(new Date(action.type))
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
