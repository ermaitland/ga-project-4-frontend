import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  getAllProducts: `${process.env.REACT_APP_BASE_URL}/api/products/`,
  getSingleProduct: (id) =>
    `${process.env.REACT_APP_BASE_URL}/api/products/${id}/`,
  allCategories: `${process.env.REACT_APP_BASE_URL}/api/category/`,
  getAllBrands: `${process.env.REACT_APP_BASE_URL}/api/brands/`,
  getSingleBrand: (id) => `${process.env.REACT_APP_BASE_URL}/api/brands/${id}/`,
  login: `${process.env.REACT_APP_BASE_URL}/api/auth/login/`,
  register: `${process.env.REACT_APP_BASE_URL}/api/auth/register/`,
  medsList: (id) =>
    `${process.env.REACT_APP_BASE_URL}/api/auth/requests/${id}/`,
  addToMeds: `${process.env.REACT_APP_BASE_URL}/api/myMeds/`,
  deleteFromMedList: (id) =>
    `${process.env.REACT_APP_BASE_URL}/api/auth/myMeds/${id}/`,
  allRequests: `${process.env.REACT_APP_BASE_URL}/api/requests/`,
  deleteRequests: (id) =>
    `${process.env.REACT_APP_BASE_URL}/api/requests/${id}/`,
  createRequest: `${process.env.REACT_APP_BASE_URL}/api/requests/create/`,
  search: (query) =>
    `${process.env.REACT_APP_BASE_URL}/api/products/search/?search=${query}`,
  faqs: `${process.env.REACT_APP_BASE_URL}/api/faqs/`
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
