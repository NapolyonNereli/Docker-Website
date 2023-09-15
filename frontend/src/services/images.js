import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getImages = async () => {
  try {
    const response = await api.get("/images/get-images");
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deletedImage = async (imageId) => {
  try {
    const response = await api.post("/images/delete-image", { imageId });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const runImage = async (imageID) => {
  try {
    const response = await api.post("/images/run-container", { imageID });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const services = {
  getImages,
  deletedImage,
  runImage,
};

export default services;
