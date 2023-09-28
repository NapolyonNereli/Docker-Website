import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import services from "../services/deploy";

function DeployPage() {
  // hooks
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  //functions

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await services.deployPath(text, name);
    console.log(response);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Seçilen dosya:", file);
    }
  };

  return (
    <>
      <NavBar />
      <SideBar selected="deploy">
        <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative items-center">
          <div className="absolute opacity-60 inset-0 z-0"></div>
          <div className="sm:max-w-lg w-full p-10 bg-slate-50 shadow-lg rounded-xl z-10">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                File Upload!
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Upload your Dockerfile
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-3">
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Title
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Container name"
                />
              </div>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Attach Document
                </label>
                <div className="flex items-center justify-center w-full">
                  {/* <input
                    type="file"
                    className="hidden"
                    id="fileInput"
                    onChange={handleFileChange}
                  /> */}
                  <label
                    htmlFor="fileInput"
                    className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
                  >
                    <div className="h-full w-full text-center flex flex-col justify-center items-center">
                      <svg
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="pointer-none text-gray-500">
                        {/* Drag your Dockerfile */}
                        Out of Use, Dont Use
                      </p>
                    </div>
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                <span>File type: just Dockerfile</span>
              </p>
              <div>
                <h1 className="text-center text-3xl">OR</h1>
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Dockerfile Path
                </label>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="EX: /home/pc/Dockerfile"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide
                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </SideBar>
    </>
  );
}

export default DeployPage;
