import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001",
});


const getImages = async () => {
try {
    const response = await api.get('/images/get-images');
    return response
} catch (error) {
    console.log(error);
}
}

const services = {
    getImages,
}

export default services;