import { decrement, increment, reset } from './counter.actions';
import { countReducer, CountState } from './counter.reducer';

let mockState: CountState;

describe('Count Reducer', () => {
  let mockState: CountState;

  it('should increase count by the interval value (case 1)', () => {
    mockState = {
      count: 0,
      interval: 1,
    };

    mockState = countReducer(mockState, increment);
    expect(mockState.count).toBe(1);
  });

  it('should increment count by the interval value (case 2)', () => {
    mockState = {
      count: 2,
      interval: 2,
    };

    mockState = countReducer(mockState, increment);
    expect(mockState.count).toBe(4);
  });

  //   Decrement action
  it('should decrease count by the interval value (case 1)', () => {
    mockState = {
      count: 2,
      interval: 1,
    };

    mockState = countReducer(mockState, decrement);
    expect(mockState.count).toBe(1);
  });

  it('should decrease count by the interval value (case 5)', () => {
    mockState = {
      count: 0,
      interval: 5,
    };
    mockState = countReducer(mockState, decrement);
    expect(mockState.count).toBe(0);
  });

  //   Reset action
  it('should reset count to 0 and interval to 1', () => {
    mockState = {
      count: 5,
      interval: 2,
    };
    mockState = countReducer(mockState, reset);
    expect(mockState.count).toBe(0);
    expect(mockState.interval).toBe(1);
  });
});
