import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { api } from '../services/api';
import { fetchOffersAction, checkAuthAction, loginAction, logoutAction } from './api-action';
import { loadOffers } from './data/data';
import { setAuth } from './user/user';
import { State } from '../types/state';
import { ApiRoute } from '../const';
import { offers, authData } from '../utils/mock';

describe('Async actions', () => {
  const apiInstance = api();
  const mockAPI = new MockAdapter(apiInstance);

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >([thunk.withExtraArgument(apiInstance)]);

  it('should dispatch loadOffers when GET /hotels', async () => {
    const store = mockStore();
    mockAPI
      .onGet(ApiRoute.offers)
      .reply(200, offers);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOffersAction());
    expect( store.getActions().find(({ type }) => type === loadOffers.toString())).toBeDefined();
  });

  it('should dispatch setAuth when GET /login', async () => {
    const store = mockStore();
    mockAPI
      .onGet(ApiRoute.login)
      .reply(200);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    expect( store.getActions().find(({ type }) => type === setAuth.toString())).toBeDefined();
  });

  it('should dispatch setAuth when GET /login return 401', async () => {
    const store = mockStore();
    mockAPI
      .onGet(ApiRoute.login)
      .reply(401);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    expect( store.getActions().find(({ type }) => type === setAuth.toString())).toBeDefined();
  });

  it('should dispatch setAuth when POST /login', async () => {
    const store = mockStore();
    mockAPI
      .onPost(ApiRoute.login, authData)
      .reply(200);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(loginAction(authData));
    expect( store.getActions().find(({ type }) => type === setAuth.toString())).toBeDefined();
  });

  it('should dispatch setAuth when DELETE /logout', async () => {
    const store = mockStore();
    mockAPI
      .onDelete(ApiRoute.logout)
      .reply(200);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(logoutAction());
    expect( store.getActions().find(({ type }) => type === setAuth.toString())).toBeDefined();
  });
});
