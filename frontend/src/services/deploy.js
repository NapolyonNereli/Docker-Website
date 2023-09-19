import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const deployPath = async (text, name) => {
  try {
    // text = Dockerfile path
    const response = await api.post("/deploy/build", {
      text: text,
      name: name,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const services = {
  deployPath,
};

export default services;
