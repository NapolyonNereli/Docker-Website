import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const createDockerfile = async (from, workdir, copy, run, cmd, expose) => {
    try {
        const response = await api.post("/file/dockerfile", {
            from: from,
            workdir: workdir,
            copy: copy,
            run: run,
            cmd: cmd,
            expose: expose
        });
        console.log(response.data);
    } catch (error) {
        console.log("service Error: ", error);
    }
} 
// frontend services dosyası
const downloadDockerfile = async (props) => {
  try {
    const response = await api.get('/file/download-dockerfile', {
      responseType: 'blob',
    });

    const blob = new Blob([response.data], { type: 'application/octet-stream' });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dockerfile');
    document.body.appendChild(link);

    link.click();
    link.parentNode.removeChild(link);

    props.onClose();
  } catch (error) {
    console.error('Download error:', error);
  }
};




const services = {
    createDockerfile,
    downloadDockerfile,
}

export default services;