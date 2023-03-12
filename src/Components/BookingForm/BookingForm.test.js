import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ];
    render(<BookingForm availableTimes={availableTimes}/>);
    const label = screen.getByText("Choose date");
    expect(label).toBeInTheDocument();
})