import { Routes, Route } from "react-router-dom";
import BookingPage from "./Views/BookingPage/BookingPage";
import HomePage from './Views/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/BookingPage" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default App;
