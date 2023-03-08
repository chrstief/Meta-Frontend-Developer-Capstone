import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm({availableTimes,dispatchAvailableTimes}) {
  const [formData, setFormData] = useState({
    resDate: '',
    resTime: '17:00',
    guests: '1',
    occasion: 'Birthday'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Do something with the form data here
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="resDate"
        value={formData.resDate}
        onChange={(event)=>{
            handleChange(event)
            dispatchAvailableTimes({type:event.target.value})
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="resTime"
        value={formData.resTime}
        onChange={handleChange}
      >
        {availableTimes.map((availableTime)=><option key={availableTime} value={availableTime}>{availableTime}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
