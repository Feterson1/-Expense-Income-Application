import axios from 'axios';
import { getTokenFromLocalStorage } from '../helpers/localStorage.helper';

export const instance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
    }
})