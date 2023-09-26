import React, { useEffect, useState } from "react";
import services from "../services/superUser";
import { useNavigate } from "react-router-dom";

function Entrance() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await services.superUser(password);
    console.log(response);
    navigate("/home");
  };

  // Decoration balls
  useEffect(() => {
    function createRandomCircle(container) {
      const circle = document.createElement("div");

      const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-purple-500",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const sizes = ["w-16 h-16", "w-24 h-24", "w-32 h-32", "w-52 h-52"];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

      circle.className = `absolute ${randomSize} ${randomColor} rounded-full animate-pulse`;

      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;

      circle.style.top = top;
      circle.style.left = left;

      container.appendChild(circle);
    }

    const whiteContainer = document.querySelector(".bg-yellow-50");

    for (let i = 0; i < 10; i++) {
      createRandomCircle(whiteContainer);
    }
  }, []);

  return (
    <div className="h-screen bg-gray-100 relative overflow-hidden">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
          <div className="flex justify-center items-center md:col-span-1 bg-blue-400 p-4 text-white text-center">
            <div>
              <h1 className="mt-5 text-3xl font-medium leading-tight">
                Welcome My App
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center md:col-span-2 bg-yellow-50 p-4 text-white text-center relative">
            <div className="md:h-1/2 md:w-3/4 sm:h-3/4 sm:w-full mx-auto rounded-xl relative z-10 bg-slate-500">
              <h3 className=" mt-5 text-5xl font-medium leading-tight text-red-400 ">
                Authorization Access
              </h3>
              <form onSubmit={handleSubmit} className="mt-12">
                <label className="m-auto grid grid-cols-1 space-y-2 text-white">
                  Password Entry
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="text-black m-auto w-3/4 text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
                <div className="mt-5">
                  <button
                    type="submit"
                    className="px-4 py-2 w-2/4 rounded-md bg-blue-400 hover:bg-blue-500"
                  >
                    Enter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entrance;
