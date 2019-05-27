import axios from 'axios';

const baseURL = 'http://localhost:3000/words/';

// Higher order helper function to reduce error handling boilerplate.
const handleError = (fn) => (...params) =>
  fn(...params).catch((error) => {
    console.error(error);
  });

export const api = {
  getWord: handleError(async (id) => {
    const result = await axios.get(baseURL + id);
    return result.data;
  }),
  getWords: handleError(async () => {
    const result = await axios.get(baseURL);
    return result.data;
  }),
  deleteWord: handleError(async (id) => {
    const result = await axios.delete(baseURL + id);
    return result.data;
  }),
  createWord: handleError(async (payload) => {
    const result = await axios.post(baseURL, payload);
    return result.data;
  }),
  updateWord: handleError(async (payload) => {
    const result = await axios.put(baseURL + payload._id, payload);
    return result.data;
  })
}
