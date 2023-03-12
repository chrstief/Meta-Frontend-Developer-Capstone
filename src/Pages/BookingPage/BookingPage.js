import styles from '../Page.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import BookingForm from '../../Components/BookingForm/BookingForm';
import { useReducer } from 'react';
import {fetchAPI, submitAPI} from "../../api";
import { useNavigate } from "react-router-dom";
export function initializeTimes(){
  const today = new Date();
  return fetchAPI(today);
}
export function updateTimes (availableTimes,action) {
  return fetchAPI(new Date(action.type))
}
export default function BookingPage() {

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  

  const navigate = useNavigate();
  function submitForm(formData){
    if (submitAPI(formData)) {
      navigate("/ConfirmedBooking");
    }
  }
  
 
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <Header/>
        <Nav/>
      </div>
      <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm} />
      <Footer/>
    </div>
  )
}
