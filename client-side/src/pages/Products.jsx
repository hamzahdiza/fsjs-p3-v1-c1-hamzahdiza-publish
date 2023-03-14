import { useState, useEffect } from "react";
import "../App.css";
// import useFetch from "../hooks/useFetch";
import CardProduct from "../components/CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/actionCreator";

function Products() {
  // const { data } = useFetch("http://localhost:3000/products");
  // const dataCategories = useFetch("http://localhost:3000/categories");
  // console.log(dataCategories.data, "============");

  const { isLoading, products, errorMsg: error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await dispatch(fetchProducts());
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

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
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  if (isLoading) {
    return (
      <section>
        <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
      </section>
    );
  }

  console.log(products);

  return (
    <>
      {error && <p>{error}</p>}
      {!error && (
        <div className="Products">
          <div className="bg-[#f0f0f0] w-[100%] flex justify-center items-center mt-[60px]">
            <div className="grid grid-cols-3 h-[80px] content-center gap-6 px-4 py-4 w-[1000px] ">
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
                    <span className="text-lg font-bold"> Availability </span>

                    <span className="transition group-open:-rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2">
                    <div className="bg-white border border-gray-200 rounded w-96">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700"> 0 Selected </span>

                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                          Reset
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label for="FilterInStock" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterInStock" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">In Stock (5+)</span>
                          </label>
                        </li>

                        <li>
                          <label for="FilterPreOrder" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterPreOrder" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Pre Order (3+)</span>
                          </label>
                        </li>

                        <li>
                          <label for="FilterOutOfStock" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterOutOfStock" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Out of Stock (10+)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
                    <span className="text-lg font-bold"> Price </span>

                    <span className="transition group-open:-rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2">
                    <div className="bg-white border border-gray-200 rounded w-96">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">The highest price is Rp 130000</span>

                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                          Reset
                        </button>
                      </header>

                      <div className="p-4 border-t border-gray-200">
                        <div className="flex justify-between gap-4">
                          <label for="FilterPriceFrom" className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Rp</span>

                            <input type="number" id="FilterPriceFrom" placeholder="From" className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm" />
                          </label>

                          <label for="FilterPriceTo" className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Rp</span>

                            <input type="number" id="FilterPriceTo" placeholder="To" className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
                    <span className="text-lg font-bold"> Categories </span>

                    <span className="transition group-open:-rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2">
                    <div className="bg-white border border-gray-200 rounded w-96">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700"> 0 Selected </span>

                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                          Reset
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label for="FilterRed" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterRed" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Red</span>
                          </label>
                        </li>

                        <li>
                          <label for="FilterBlue" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterBlue" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Blue</span>
                          </label>
                        </li>

                        <li>
                          <label for="FilterGreen" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterGreen" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Green</span>
                          </label>
                        </li>

                        <li>
                          <label for="FilterOrange" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterOrange" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Orange</span>
                          </label>
                        </li>

                        <li>
                          <label for="FilterPurple" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterPurple" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Purple</span>
                          </label>
                        </li>

                        <li>
                          <label for="FilterTeal" className="inline-flex items-center gap-2">
                            <input type="checkbox" id="FilterTeal" className="w-5 h-5 border-gray-300 rounded" />

                            <span className="text-sm font-medium text-gray-700">Teal</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
          {/* Batas */}
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <div className="block mt-8 lg:hidden">
              <button className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-5 lg:items-start lg:gap-8">
              <div className="hidden space-y-4 lg:block">
                <div>
                  <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                    Sort By
                  </label>

                  <select id="SortBy" className="mt-1 text-sm border-gray-300 rounded">
                    <option>Sort By</option>
                    <option value="Title, DESC">Title, DESC</option>
                    <option value="Title, ASC">Title, ASC</option>
                    <option value="Price, DESC">Price, DESC</option>
                    <option value="Price, ASC">Price, ASC</option>
                  </select>
                </div>

                <div>
                  <p className="block text-xs font-medium text-gray-700">Filters</p>

                  <div className="mt-1 space-y-2">
                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                        <span className="text-sm font-medium"> Availability </span>

                        <span className="transition group-open:-rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>

                      <div className="bg-white border-t border-gray-200">
                        <header className="flex items-center justify-between p-4">
                          <span className="text-sm text-gray-700"> 0 Selected </span>

                          <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                            Reset
                          </button>
                        </header>

                        <ul className="p-4 space-y-1 border-t border-gray-200">
                          <li>
                            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                              <input type="checkbox" id="FilterInStock" className="w-5 h-5 border-gray-300 rounded" />

                              <span className="text-sm font-medium text-gray-700">In Stock (5+)</span>
                            </label>
                          </li>

                          <li>
                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                              <input type="checkbox" id="FilterPreOrder" className="w-5 h-5 border-gray-300 rounded" />

                              <span className="text-sm font-medium text-gray-700">Pre Order (3+)</span>
                            </label>
                          </li>

                          <li>
                            <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                              <input type="checkbox" id="FilterOutOfStock" className="w-5 h-5 border-gray-300 rounded" />

                              <span className="text-sm font-medium text-gray-700">Out of Stock (10+)</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </details>

                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                        <span className="text-sm font-medium"> Price </span>

                        <span className="transition group-open:-rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>

                      <div className="bg-white border-t border-gray-200">
                        <header className="flex items-center justify-between p-4">
                          <span className="text-sm text-gray-700">The highest price is Rp. 130000</span>

                          <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                            Reset
                          </button>
                        </header>

                        <div className="p-4 border-t border-gray-200">
                          <div className="flex justify-between gap-4">
                            <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">Rp</span>

                              <input type="number" id="FilterPriceFrom" placeholder="From" className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm" />
                            </label>

                            <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">Rp</span>

                              <input type="number" id="FilterPriceTo" placeholder="To" className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </details>

                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                        <span className="text-sm font-medium"> Categories </span>

                        <span className="transition group-open:-rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>

                      <div className="bg-white border-t border-gray-200">
                        <header className="flex items-center justify-between p-4">
                          <span className="text-sm text-gray-700"> 0 Selected </span>

                          <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                            Reset
                          </button>
                        </header>

                        <ul className="p-4 space-y-1 border-t border-gray-200">
                          {/* Categories sidebar =========== */}
                          {/* {dataCategories.data.map((category) => {
                        <div key={category.id}>
                          <li>
                            <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                              <input type="checkbox" id="FilterRed" className="w-5 h-5 border-gray-300 rounded" />

                              <span className="text-sm font-medium text-gray-700">{category.name}</span>
                            </label>
                          </li>
                          ;
                        </div>;
                      })} */}
                          <li>
                            <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                              <input type="checkbox" id="FilterRed" className="w-5 h-5 border-gray-300 rounded" />

                              <span className="text-sm font-medium text-gray-700">Red</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Card Product =================== */}
                  {products.map((product) => {
                    return <CardProduct product={product} key={product.id} />;
                  })}

                  {/* <li>
                <a href="#" className="block overflow-hidden group">
                  <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/e6c500da181441d2b828c7562762b207_tplv-o3syd03w52-origin-jpeg_354db1a7-233b-43e6-a5f7-153882e6b897.jpg?v=1676046830" alt="" className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]" />

                  <div className="relative pt-3 bg-white">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">Basic Tee</h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="block overflow-hidden group">
                  <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/e6c500da181441d2b828c7562762b207_tplv-o3syd03w52-origin-jpeg_354db1a7-233b-43e6-a5f7-153882e6b897.jpg?v=1676046830" alt="" className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]" />

                  <div className="relative pt-3 bg-white">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">Basic Tee</h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="block overflow-hidden group">
                  <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/e6c500da181441d2b828c7562762b207_tplv-o3syd03w52-origin-jpeg_354db1a7-233b-43e6-a5f7-153882e6b897.jpg?v=1676046830" alt="" className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]" />

                  <div className="relative pt-3 bg-white">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">Basic Tee</h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Products;
