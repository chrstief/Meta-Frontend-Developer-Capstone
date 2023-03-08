import { Routes, Route } from "react-router-dom";
import BookingPage from "./Pages/BookingPage/BookingPage";
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/BookingPage" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default App;
