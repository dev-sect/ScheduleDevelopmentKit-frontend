import Vue from 'vue'
import axios from 'axios'

const baseURL = 'OUR_API_URL_GOES_HERE'

const api = axios.create({
    baseURL: baseURL,
})

Vue.prototype.$api = api

export default api
