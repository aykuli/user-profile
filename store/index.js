import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { NOT_LOGGED_MESSAGE, SOME_TOKEN } from '../static/constantas';
import { USER_DATA} from '../static/mock';

const mock = new MockAdapter(axios, { delayResponse: 2000 });

export const state = () => ({
  token: null,
  user: null,
  notLoggedMessage: null,
  isGettingResponse: false
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = null;
  },
  SET_USER_DATA(state, payload) {
    state.user = payload;
  },
  SET_NOT_LOGGED_MESSAGE(state, payload) {
    state.notLoggedMessage = payload;
  },
  SET_RESPONSE_STATE(state, payload) {
    state.isGettingResponse = payload;
  }
};

export const actions = {
  async login({ commit }, payload) {
    commit('SET_RESPONSE_STATE', true);

    mock.onPut("/login", { params: payload }).reply((response) => {
      if (  JSON.parse(response.data).params.password === USER_DATA.password
        &&  JSON.parse(response.data).params.email === USER_DATA.email) {
        const { name, email, photo, lazyPhoto } = USER_DATA;

        return [200, { user: { name, email, photo, lazyPhoto }}];
      } else {
        return [403, { message: NOT_LOGGED_MESSAGE }];
      }
    });

    axios.put("/login", { params: payload }).then(response => {
      commit('SET_TOKEN', SOME_TOKEN);
      commit('SET_USER_DATA', response.data.user);
      commit('SET_NOT_LOGGED_MESSAGE', null);
      commit('SET_RESPONSE_STATE', false);

      this.$router.push('/profile');
    }).catch(() => {
      commit('SET_NOT_LOGGED_MESSAGE', NOT_LOGGED_MESSAGE);
      commit('SET_RESPONSE_STATE', false);
    });
  },
  async logout({ commit }) {
    commit('CLEAR_TOKEN');
  }
};

export const getters = {
  getState: s => s,
  hasToken: s => !!s.token,
  user: s => s.user,
  isGettingResponse: s => s.isGettingResponse
};
