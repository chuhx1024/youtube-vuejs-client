import axios from 'axios'

export const request = axios.create({
    // baseURL: process.env.VUE_APP_BASE_URL,
    baseURL: 'http://127.0.0.1:7002/',
})
