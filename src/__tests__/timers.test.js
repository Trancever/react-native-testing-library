import waitFor from '../waitFor';
import { TimerMode, setupFakeTimers } from './timerUtils';

describe.each([TimerMode.Default, TimerMode.Legacy])(
  '%s fake timers tests',
  (fakeTimerType) => {
    beforeEach(() => setupFakeTimers(fakeTimerType));

    test('it successfully runs tests', () => {
      expect(true).toBeTruthy();
    });

    test('it successfully uses waitFor', async () => {
      await waitFor(() => {
        expect(true).toBeTruthy();
      });
    });

    test('it successfully uses waitFor with real timers', async () => {
      jest.useRealTimers();
      await waitFor(() => {
        expect(true).toBeTruthy();
      });
    });
  }
);
