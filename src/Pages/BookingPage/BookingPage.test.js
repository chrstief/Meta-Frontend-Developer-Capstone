import {initializeTimes,updateTimes} from './BookingPage';

describe('BookingPage', () => {
  test('should initialize times and return a non-empty array', () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
  test('should update times and return a non-empty array', () => {
    const result = updateTimes("",{type:"2023-03-01"});
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});