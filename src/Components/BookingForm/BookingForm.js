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
    <div className={styles.heroBackground}>
      <h1 className={`displayTitle ${styles.heading}`}>Reservations</h1>
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="res-date" className="highlightText">
        Choose a date:
      </label>
      <input
        type="date"
        id="res-date"
        name="resDate"
        value={formData.resDate}
        onChange={(event) => {
          handleChange(event);
          dispatchAvailableTimes({ type: event.target.value });
        }}
        className={`paragraphText ${`paragraphText ${styles.input}`}`}
        required
      />
      <label htmlFor="res-time" className="highlightText">
        Choose a time:
      </label>
      <select
        id="res-time"
        name="resTime"
        value={formData.resTime}
        onChange={handleChange}
        className={`paragraphText ${styles.input}`}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests" className="highlightText">
        Number of guests:
      </label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        className={`paragraphText ${styles.input}`}
        required
      />
      <label htmlFor="occasion" className="highlightText">
        Occasion:
      </label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        className={`paragraphText ${styles.input}`}
      >
        <option value="No special occasion">No special occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button type="submit" className={`${styles.button} cardTitle`}>
        Make Your reservation
      </button>
    </form>
    </div>
  );
}