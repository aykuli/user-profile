export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    console.log('token in setToken: ', token);
    console.log('state in setToken: ', state);
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
};

export const actions = {
  async login({ commit }) {
    console.log('login action');
    commit('setToken', 'trueToken');
  },
  async logout({ commit }) {
    console.log('logout action');
    commit('clearToken');
  }
};

export const getters = {
  hasToken: s => !!s.token
}
