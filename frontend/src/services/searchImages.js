import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const searchImages = async (search) => {
  try {
    const response = await api.post("/search/images", { search });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const downloadImages = async (image) => {
  try {
    const response = await api.post("/search/download", { image });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const services = {
  searchImages,
  downloadImages,
};

export default services;
