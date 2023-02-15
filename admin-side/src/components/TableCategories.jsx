import React from "react";

const TableCategories = ({ category, index }) => {
  return (
    <>
      <tr key={category.id}>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{category.name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Rabu 29/04/2022</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Rabu 29/04/2022</td>
        <td className="whitespace-nowrap px-2 py-2 text-center">
          <a href="#" className="ml-4 inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default TableCategories;
