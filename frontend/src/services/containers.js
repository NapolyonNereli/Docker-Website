import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getContainers = async () => {
  try {
    const response = await api.get("/containers/get-containers");
    return response;
  } catch (error) {
    console.log(error);
  }
};

const stopContainer = async (imageId) => {
  try {
    const response = await api.post("/containers/stop-container", {
      imageID: imageId,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const services = {
  getContainers,
  stopContainer,
};

export default services;
