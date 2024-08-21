import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  setIntervalBy,
} from '../state/counter/counter.actions';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../state/counter/counter.selectors';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { CountState } from '../state/counter/counter.reducer';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$?: Observable<CountState>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(selectCount);
    this.store
      .select((state) => state.count)
      .subscribe(
        (count) => localStorage.setItem('count', JSON.stringify(count))
        // console.log(count)
      );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  setInterval(event: any) {
    this.store.dispatch(setIntervalBy({ interval: event.target.value }));
    // console.log(event.target.value);
  }
}
