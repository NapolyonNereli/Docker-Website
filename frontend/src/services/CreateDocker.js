import axios from "axios";

const api = axios.create({
    baseUrl: "http://localhost:3001",
});

const createDockerfile = async (from, workdir, run, copy, run, cmd, expose) => {
    try {
        const response = await api.post("/docker/create-dockerfile", {
            from: from,
            workdir: workdir,
            copy: copy,
            run: run,
            cmd: cmd,
            expose: expose
        });
        console.log(response);
    } catch (error) {
        console("service Error: ", error);
    }
} 

const services = {
    createDockerfile,
}

export default services;