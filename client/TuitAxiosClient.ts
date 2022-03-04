import axios, { AxiosResponse } from 'axios';
import Tuit from "../models/Tuit";
// axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.baseURL = 'https://cs5500assignment3.herokuapp.com/api';

const findAllTuits = async () =>
    await axios.get('/tuits');

const findTuitById = async (tid: string) => {
  return await axios.get(`/tuits/${tid}`);
}

const createTuit = async (tuit: Tuit) =>
  await axios.post('/tuits', tuit);

const updateTuit = async (tid: string, tuit: Tuit) =>
  await axios.put(`/tuits/${tid}`, tuit);

const deleteTuit = async (tid: string) =>
  await axios.delete(`/tuits/${tid}`);
