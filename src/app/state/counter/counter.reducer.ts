import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, setIntervalBy } from './counter.actions';

export interface CountState {
  count: number;
  interval: number;
}

export const initialState: CountState = JSON.parse(
  localStorage.getItem('count') ?? JSON.stringify({ count: 0, interval: 1 })
);

export const countReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count + state.interval,
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count > 0 ? state.count - state.interval : 0,
  })),
  on(setIntervalBy, (state, intervalValue) => ({
    ...state,
    interval: intervalValue.interval,
  })),
  on(reset, (state) => ({ ...state, count: 0, interval: 1 }))
);
