import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm({availableTimes,dispatchAvailableTimes,submitForm}) {
  const [formData, setFormData] = useState({
    resDate: new Date().toISOString().substr(0, 10),
    resTime: '',
    guests: '1',
    occasion: 'No special occasion'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
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
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
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
        <option selected value="No special occasion">No special occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"/>
    </form>
  );
}