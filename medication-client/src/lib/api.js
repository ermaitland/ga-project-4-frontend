import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  getAllProducts: 'api/products/',
  getAllBrands: 'api/brands/',
  login: 'api/auth/login/',
  register: 'api/auth/register/',
  allRequests: 'api/requests/'
};

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
