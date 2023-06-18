import api from "./api";

const httpGet = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const httpPost = async (url, data, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const httpPut = async (url, data, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const httpDelete = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const httpService = {
  httpGet,
  httpPost,
  httpPut,
  httpDelete
}

export default httpService;