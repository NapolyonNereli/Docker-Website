import React from "react";

function ContainerTable({ list }) {
  return (
    <div className="rounded-lg relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3" scope="col">
              CONTAINER ID
            </th>
            <th className="px-6 py-3" scope="col">
              IMAGE
            </th>
            <th className="px-6 py-3" scope="col">
              COMMAND
            </th>
            <th className="px-6 py-3" scope="col">
              CREATED
            </th>
            <th className="px-6 py-3" scope="col">
              STATUS
            </th>
            <th className="px-6 py-3" scope="col">
              PORTS
            </th>
            <th className="px-6 py-3" scope="col">
              NAMES
            </th>
            <th className="px-6 py-3" scope="col">
              STOP
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((containers, index) => (
            <tr
              key={index}
              className={`bg-white border-b ${
                index % 2 == 0 ? "dark:bg-gray-800" : "dark:bg-gray-700"
              } dark:border-gray-700`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {containers.containerId}
              </th>
              <td className="px-6 py-4">{containers.image}</td>
              <td className="px-6 py-4">{containers.command}</td>
              <td className="px-6 py-4">
                {containers.created} {containers.time} {containers.ago}
              </td>
              <td className="px-6 py-4">{containers.status}</td>
              <td className="px-6 py-4">{containers.port}</td>
              <td className="px-6 py-4">{containers.names}</td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 bg-red-400 text-white rounded-md">
                  STOP
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContainerTable;
