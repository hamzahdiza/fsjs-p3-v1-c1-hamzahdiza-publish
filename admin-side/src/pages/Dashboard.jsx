import { useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch";
import TableProduct from "../components/TableProduct";
// import ImagePopup from "../components/ImagePopup";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/actionCreator";

function Dashboard() {
  const { isLoading, products, errorMsg: error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <section>
        <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
      </section>
    );
  }

  return (
    <div className="Dashboard ">
      <div className="items-center mt-[60px] w-[1200px] p-8">
        <div className="flex mb-5 w-[1200px]">
          <h1 className="font-bold text-[45px] ml-7 my-auto">Dashboard</h1>
          <div className="whitespace-nowrap px-2 py-2 text-gray-700 my-auto ml-[770px]">
            <Link to={"/product/add-product"}>
              <a href="#" className=" inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
                Add Product
              </a>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ml-7">
          <table className="w-[1400px] divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">No</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">Name</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">Category</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">Price</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">Created By</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">Main Image</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">Images</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 text-center">Action</th>
                {/* <th className="px-4 py-2"></th> */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {/* {products.data.map((product, index) => {
                return <TableProduct product={product} key={product.id} index={index} />;
              })} */}
              {/* {dataProducts.data.map((product) => {
                <tr key={product.id}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">1</td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Erigo Kemeja Flannel Emily Cream</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">FLANNEL</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">130000</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">hamzahdiza</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center w-[7%] h-[7%] ">
                    <img className="object-cover rounded-full" src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/e6c500da181441d2b828c7562762b207_tplv-o3syd03w52-origin-jpeg_354db1a7-233b-43e6-a5f7-153882e6b897.jpg?v=1676046830" alt="" />
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700 text-center">
                    <a href="#" className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
                      Show Image
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-center">
                    <a href="#" className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700">
                      Edit
                    </a>
                    <a href="#" className="ml-4 inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
                      Delete
                    </a>
                  </td>
                </tr>;
              })} */}
            </tbody>
          </table>
        </div>
      </div>
      {/* <ImagePopup /> */}
    </div>
  );
}

export default Dashboard;
