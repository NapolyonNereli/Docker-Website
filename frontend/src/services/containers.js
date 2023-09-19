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

const services = {
  getContainers,
};

export default services;
