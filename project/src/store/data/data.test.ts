import { data, loadOffers, selectCity } from './data';
import { City } from '../../const';
import { offers } from '../../utils/mock';

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ city: City.Paris, offers: [], loading: true });
  });

  it('should select current city', () => {
    const state = { city: City.Paris, offers: [], loading: true };
    expect(data.reducer(state, selectCity({ city: City.Cologne })))
      .toEqual({ city: City.Cologne, offers: [], loading: true });
  });

  it('should load offers', () => {
    const state = { city: City.Dusseldorf, offers: [], loading: true };
    expect(data.reducer(state, loadOffers({ offers })))
      .toEqual({ city: City.Dusseldorf, offers, loading: false });
  });
});
