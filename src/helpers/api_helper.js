import axios from "axios";
const REACT_APP_API = `https://api-ieltsx.salesx-staging.xyz/api/v1`;
export const axiosApi = axios.create({
  baseURL: REACT_APP_API,
});
export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}
export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export const getData = (url, authtoken) =>
  get(url, { headers: { Authorization: `Bearer ${authtoken}` } });
export const postData = (url, data, authtoken) =>
  post(url, data, { headers: { Authorization: `Bearer ${authtoken}` } });
