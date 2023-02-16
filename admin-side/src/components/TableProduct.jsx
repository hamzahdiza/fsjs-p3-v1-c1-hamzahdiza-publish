import { Link, NavLink } from "react-router-dom";

const TableProduct = ({ product, index }) => {
  return (
    <>
      <tr key={product.id}>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{product.name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">FLANNEL</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{product.price}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">hamzahdiza</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center w-[7%] h-[7%] ">
          <img className="object-cover rounded-full" src={product.mainImg} alt="" />
        </td>
        <td className="whitespace-nowrap px-2 py-2 text-gray-700 text-center">
          <Link to={"/product/images"}>
            <a href="#" className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
              Show Image
            </a>
          </Link>
        </td>
        <td className="whitespace-nowrap px-2 py-2 text-center">
          <Link to={"product/edit-product"}>
            <a href="#" className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700">
              Edit
            </a>
          </Link>
          <a href="#" className="ml-4 inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default TableProduct;
