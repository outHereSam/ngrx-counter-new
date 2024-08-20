import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter/counter.actions';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../state/counter/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$?: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select(selectCount);
    this.store
      .select((state) => state.count)
      .subscribe((count) => console.log(count));
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
}
