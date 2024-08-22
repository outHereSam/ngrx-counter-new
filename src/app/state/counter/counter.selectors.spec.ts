import { CountState } from './counter.reducer';
import { selectCount } from './counter.selectors';

describe('Count Selector', () => {
  it('should select the count state', () => {
    const mockState: CountState = {
      count: 5,
      interval: 2,
    };

    const result = selectCount.projector(mockState);
    expect(result.count).toBe(5);
  });
});
