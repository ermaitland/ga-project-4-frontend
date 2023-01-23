import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  getAllProducts: '/api/products/',
  getSingleProduct: (id) => `/api/products/${id}/`,
  allCategories: '/api/category/',
  getAllBrands: '/api/brands/',
  getSingleBrand: (id) => `/api/brands/${id}/`,
  login: '/api/auth/login/',
  register: '/api/auth/register/',
  allRequests: '/api/requests/',
  createRequest: '/api/requests/create/',
  search: (query) => `/api/products/search/?search=${query}`,
  faqs: '/api/faqs/'
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
