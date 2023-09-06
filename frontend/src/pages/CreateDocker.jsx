import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";
import services from "../services/CreateDocker";

const style = {
  input: `m-auto w-3/4 text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500`,
  label: `m-auto grid grid-cols-1 space-y-2 text-white`,
};

function CreateDocker() {

  // Hooks
  const [from, setFrom] = useState("")
  const [workdir, setWorkdir] = useState("");
  const [copy, setCopy] = useState("");
  const [run, setRun] = useState("");
  const [cmd, setCmd] = useState("");
  const [expose, setExpose] = useState("");
  const [open, setOpen] = useState("");

  const handleSumbit = (e) => {
    // execute services created file
    e.preventDefault();
    services.createDockerfile(from, workdir, copy, run, cmd, expose);
    setOpen(true);
  }

  const handleCancel = () => {
    setOpen(false);
  }
  const downloadFile = () => {
    services.downloadDockerfile();
    setOpen(false);
  }

  return (
    <>
      <NavBar />
      <SideBar>
        <div>
          <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-slate-400 text-center">
            Create Basic Dockerfile
          </h3>
          <form onSubmit={handleSumbit} className="bg-slate-500 shadow-sm shadow-slate-500 w-3/5 m-auto rounded-lg p-3">
            <div className="grid grid-cols-1 space-y-2 mt-2">
              <label className={style.label}>FROM</label>
              <input onChange={(e) => setFrom(e.target.value)} placeholder="node:18-alpine" className={style.input} />
            </div>
            <div className="grid grid-cols-1 space-y-2 mt-2">
              <label className={style.label}>WORKDIR</label>
              <input onChange={(e) => setWorkdir(e.target.value)} placeholder="/app" className={style.input} />
            </div>
            <div className="grid grid-cols-1 space-y-2 mt-2">
              <label className={style.label}>COPY</label>
              <input onChange={(e) => setCopy(e.target.value)} placeholder=". ." className={style.input} />
            </div>
            <div className="grid grid-cols-1 space-y-2 mt-2">
              <label className={style.label}>RUN</label>
              <input
                placeholder="yarn install --production"
                className={style.input}
                onChange={(e) => setRun(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 space-y-2 mt-2">
              <label className={style.label}>CMD</label>
              <input
                placeholder='["node", "src/index.js"]'
                className={style.input}
                onChange={(e) => setCmd(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 space-y-2 mt-2">
              <label className={style.label}>EXPOSE</label>
              <input onChange={(e) => setExpose(e.target.value)} placeholder="3000" className={style.input} />
            </div>
            <div className="grid grid-cols-1 space-y-2 mt-5 ">
              <button type="submit" className="m-auto px-4 py-2 bg-green-500 duration-500 hover:duration-500 hover:bg-green-600  text-white font-bold w-3/4 rounded">
                Download
              </button>
            </div>
          </form>
        </div>
      </SideBar>
      {open && (
      <Modal message="Message" onClose={handleCancel} onConfirm={downloadFile} /> 
      )} 
    </>
  );
}

export default CreateDocker;

// ALL Dockerfile command
// Comments
// FROM
// CMD
// ENTRYPOINT
// WORKDIR
// ENV
// COPY
// LABEL
// RUN
// ADD
// .dockerignore
// ARG
// EXPOSE
// USER
// VOLUME
