import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = API_URL;

const ApiService = {
    // init() {
    // },

//   setHeader() {
//     Vue.axios.defaults.headers.common[
//       "Authorization"
//     ] = `Token ${JwtService.getToken()}`;
//   },

    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    getPagination(resource, slug = 1) {
        return Vue.axios.get(`${resource}?page=${slug}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
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
        return Vue.axios.delete(resource).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;

export const UsersService = {
  get(slug) {
    return ApiService.get("users", slug);
  },
  getPagination(slug) {
    return ApiService.getPagination("users", slug);
  },
  create(params) {
    return ApiService.post("users", params);
  },
  update(slug, params) {
    return ApiService.update("users", slug, params);
  },
  destroy(slug) {
    return ApiService.delete(`users/${slug}`);
  }
};

