import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const superUser = async (pass) => {
  try {
    const response = await api.post("/root/sudo", { pass });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const services = {
  superUser,
};

export default services;
