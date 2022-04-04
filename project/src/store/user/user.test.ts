import { user, setAuth } from './user';
import { AuthStatus } from '../../types/auth';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ authStatus: AuthStatus.undefined });
  });

  it('should set auth status', () => {
    const state = { authStatus: AuthStatus.undefined };
    expect(user.reducer(state, setAuth({ auth: AuthStatus.auth })))
      .toEqual({ authStatus: AuthStatus.auth });
  });
});
