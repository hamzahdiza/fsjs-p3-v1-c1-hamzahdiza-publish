import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../store/actions/actionCreator";

const TableProduct = ({ product, index }) => {
  const { isLoading, errorMsg: error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProductHandler = async (idProduct) => {
    try {
      await dispatch(deleteProduct(idProduct));
      await dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (event) => {
    event.preventDefault();
    deleteProductHandler(product.id);
  };

  return (
    <>
      <tr key={product.id}>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{product.name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{product.Category.name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{product.price}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{product.User.username}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center w-[7%] h-[7%] ">
          <img className="object-cover rounded-full" src={product.mainImg} alt="" />
        </td>
        <td className="whitespace-nowrap px-2 py-2 text-gray-700 text-center">
          <Link to={`/product/images/${product.slug}`}>
            <a href="#" className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
              Show Image
            </a>
          </Link>
        </td>
        <td className="whitespace-nowrap px-2 py-2 text-center">
          <Link to={`product/edit-product/${product.slug}`}>
            <a href="#" className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700">
              Edit
            </a>
          </Link>

          <a href="" onClick={deleteHandler} className="ml-4 inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default TableProduct;
