import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AxiosPlugin from 'vue-axios-cors';

const ApiService = {
  async init() {
    Vue.use(VueAxios, axios);
    Vue.use(AxiosPlugin);
    Vue.axios.defaults.baseURL = 'http://localhost:8001/';
    // find out how not to hardcode this
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },

  get(resource, slug) {
    const mySlug = slug ? `/${slug}` : '';
    return Vue.axios.get(`${resource}${mySlug}`).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },
};

export default ApiService;
