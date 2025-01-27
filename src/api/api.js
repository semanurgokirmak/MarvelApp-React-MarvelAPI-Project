import axios from 'axios';
import CryptoJS from 'crypto-js';

// Marvel API Keys
const publicKey = 'b92b07b0de3924c9d431617df447c169';
const privateKey = 'acb48b2c7bfec26cc6b706d4ff4ed7843bc3c714';
const ts = Date.now().toString(); // timestamp

// Generate hash using ts, private key, and public key
const generateHash = () => {
  return CryptoJS.MD5(ts + privateKey + publicKey).toString();
};

// Search data by name
export const search = async (name) => {
  const hash = generateHash();
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.data;
};

// Get character info by ID
export const info = async (id) => {
  const hash = generateHash();
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.data;
};

// Get comics by character ID
export const getComics = async (id) => {
  const hash = generateHash();
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.data;
};

// Get series by character ID
export const getSeries = async (id) => {
  const hash = generateHash();
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}/series?seriesType=collection&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.data;
};
