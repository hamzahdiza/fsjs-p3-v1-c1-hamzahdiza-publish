import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCategory, fetchCategories } from "../store/actions/actionCreator";

const TableCategories = ({ category, index }) => {
  const { isLoading, errorMsg: error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCategoryHandler = async (idCategory) => {
    try {
      await dispatch(deleteCategory(idCategory));
      await dispatch(fetchCategories());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (event) => {
    event.preventDefault();
    deleteCategoryHandler(category.id);
  };

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{category.name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{category.createdAt.split("T")[0]}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{category.updatedAt.split("T")[0]}</td>
        <td className="whitespace-nowrap px-2 py-2 text-center">
          <a onClick={deleteHandler} href="#" className="ml-4 inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default TableCategories;
