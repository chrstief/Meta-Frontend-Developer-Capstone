import { Routes, Route } from "react-router-dom";
import BookingPage from "./Pages/BookingPage/BookingPage";
import HomePage from './Pages/HomePage/HomePage';
import ConfirmedBooking from './Pages/ConfirmedBooking/ConfirmedBooking';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/BookingPage" element={<BookingPage />}></Route>
      <Route path="/ConfirmedBooking" element={<ConfirmedBooking />}></Route>
    </Routes>
  );
}

export default App;
