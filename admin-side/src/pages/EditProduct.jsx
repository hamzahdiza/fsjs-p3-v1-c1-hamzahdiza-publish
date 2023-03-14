import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import FormAddEdit from "../components/FormAddEdit";
import { fetchProductBySlug } from "../store/actions/actionCreator";

const EditProduct = () => {
  return (
    <div className="EditProduct w-[1500px] h-[100%] content-center mt-[70px]">
      <p class="ml-[550px] mt-10 font-bold text-[30px]">Edit Product</p>

      <FormAddEdit />
    </div>
  );
};

export default EditProduct;
