import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CountState } from './counter.reducer';

export const selectAppState = (state: AppState) => state.count;

export const selectCount = createSelector(
  selectAppState,
  (state: CountState) => state
);
