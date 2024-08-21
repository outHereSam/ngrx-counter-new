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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$?: Observable<CountState>;
  interval = 1;

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
    this.interval = 1;
  }

  setInterval() {
    this.store.dispatch(setIntervalBy({ interval: this.interval }));
    // console.log(event.target.value);
  }

  changeInterval(intervalValue: number) {
    this.interval = intervalValue;
    this.setInterval();
  }
}
