const Vue = require("vue");
const Vuex = require("vuex");
const geo = require("./moudules/geo");

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: { geo },
    actions: {
      async nuxtServerInit({ commit }, { req, app }) {
        const {
          status,
          data: { province, city }
        } = await app.$axios.get('/geo/getPosition');
        commit('geo/setPosition', status === 200 ? {city, province} : {city: '', province: ''})
      }
    }
  });

module.exports = store;
