import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function DetailProduct() {
  const [detailProduct, setDetailProduct] = useState({});
  let { productId } = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`);
      const responseJson = await response.json();
      setDetailProduct(responseJson);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(detailProduct);

  return (
    <div className="DetailProduct">
      <section>
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img alt="Les Paul" src={detailProduct.mainImg} />

              <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <img alt="Les Paul" src={detailProduct.mainImg} class="object-cover w-full aspect-square rounded-xl" />

                <img alt="Les Paul" src={detailProduct.mainImg} class="object-cover w-full aspect-square rounded-xl" />

                <img alt="Les Paul" src={detailProduct.mainImg} class="object-cover w-full aspect-square rounded-xl" />

                <img alt="Les Paul" src={detailProduct.mainImg} class="object-cover w-full aspect-square rounded-xl" />
              </div>
            </div>

            <div class="sticky top-0">
              {/* <strong class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">Pre Order</strong> */}

              <div class="flex justify-between mt-8">
                <div class="max-w-[60ch]">
                  <h1 class="text-2xl font-bold">{detailProduct.name}</h1>

                  <details class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary class="block">
                      <div>
                        <div class="prose max-w-none group-open:hidden">
                          <p>{detailProduct.description}</p>
                        </div>
                      </div>
                    </summary>
                  </details>

                  <p class="mt-5 text-sm">Highest Rated Product</p>

                  <div class="mt-2 -ml-0.5 flex">
                    <svg class="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg class="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg class="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg class="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg class="w-5 h-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              <p class="text-[30px] font-bold mt-3">Rp {detailProduct.price}</p>

              <form class="mt-2">
                <fieldset class="mt-4">
                  <legend class="mb-3 text-[20px] font-bold">Size</legend>

                  <div class="flow-root">
                    <div class="-m-1 flex flex-wrap gap-4">
                      <label for="size_xs" class="cursor-pointer p-0.5">
                        <input type="radio" name="size" id="size_xs" class="sr-only peer" />

                        <span class="inline-flex items-center justify-center w-8 h-8 text-xs text-[15px] border rounded-full group peer-checked:bg-black peer-checked:text-white">XS</span>
                      </label>

                      <label for="size_s" class="cursor-pointer p-0.5">
                        <input type="radio" name="size" id="size_s" class="sr-only peer" />

                        <span class="inline-flex items-center justify-center w-8 h-8 text-xs text-[15px] border rounded-full group peer-checked:bg-black peer-checked:text-white">S</span>
                      </label>

                      <label for="size_m" class="cursor-pointer p-0.5">
                        <input type="radio" name="size" id="size_m" class="sr-only peer" />

                        <span class="inline-flex items-center justify-center w-8 h-8 text-xs text-[15px] border rounded-full group peer-checked:bg-black peer-checked:text-white">M</span>
                      </label>

                      <label for="size_l" class="cursor-pointer p-0.5">
                        <input type="radio" name="size" id="size_l" class="sr-only peer" />

                        <span class="inline-flex items-center justify-center w-8 h-8 text-xs text-[15px] border rounded-full group peer-checked:bg-black peer-checked:text-white">L</span>
                      </label>

                      <label for="size_xl" class="cursor-pointer p-0.5">
                        <input type="radio" name="size" id="size_xl" class="sr-only peer" />

                        <span class="inline-flex items-center justify-center w-8 h-8 text-xs text-[15px] border rounded-full group peer-checked:bg-black peer-checked:text-white">XL</span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div class="flex mt-8">
                  <div>
                    <label for="quantity" class="sr-only">
                      Qty
                    </label>

                    <input type="number" id="quantity" min="1" value="1" class="w-20 rounded border-gray-600 py-3 text-center text-[16px] [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                  </div>

                  <button type="submit" class="block px-5 py-3 ml-3 text-[16px] font-bold text-white hover:text-black bg-black hover:bg-gray-200 w-[350px] rounded hover:border-gray-600">
                    Add to Cart
                  </button>

                  <a href="#" className=" rounded text-center border-gray bg-white p-2.5 text-black hover:bg-red-200 ml-1">
                    <span className="sr-only">Like</span>
                    <svg fill="#404040" version="1.1" id="Capa_1" className="h-7 w-7" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.294 96.294" xmlSpace="preserve">
                      <g>
                        <path
                          d="M64.755,14.763c11.324,0,20.537,9.214,20.537,20.538c0,11.024-18.056,30.068-37.148,44.51
                          C29.066,65.389,11,46.337,11,35.301c0-11.324,9.213-20.538,20.537-20.538c3.836,0,7.572,1.062,10.806,3.07l5.803,3.605l5.804-3.604
                          C57.184,15.825,60.919,14.763,64.755,14.763 M64.755,3.763c-5.909,0-11.625,1.63-16.609,4.726
                          c-4.984-3.096-10.699-4.726-16.609-4.726C14.147,3.763,0,17.91,0,35.301c0,22.539,38.227,51.024,45.892,56.507
                          c0.663,0.473,1.442,0.723,2.255,0.723c0.816,0,1.599-0.252,2.257-0.727c7.664-5.483,45.89-33.981,45.89-56.503
                          C96.292,17.911,82.145,3.763,64.755,3.763L64.755,3.763z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>

                <div>
                  <a class="inline-block rounded border border-black px-12 py-3 text-[16px] w-[495px] font-bold text-black hover:bg-black bg-white  hover:text-white focus:outline-none focus:ring active:bg-black-500 mt-5 text-center">BUY IT NOW</a>
                </div>
              </form>

              <div>
                <div className="mt-8 ">
                  <img className=" w-[35rem]" src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Guarantee_banner.png?v=1649666846" alt="" />
                </div>
                <div className="mt-5 ml-2 flex items-center">
                  <div>
                    <svg aria-hidden="true" className="h-9 w-9" focusable="false" data-prefix="fal" data-icon="shipping-fast" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path
                        fill="currentColor"
                        d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="ml-4 font-bold">Gratis Ongkir</p>
                    <p className="ml-4">Gratis Ongkir dengan min. belanja Rp 1.500.000</p>
                  </div>
                </div>
                <div className="mt-5 ml-2 flex items-center">
                  <div>
                    <svg className="h-9 w-9" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="shield-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM262.2 478.8c-4 1.6-8.4 1.6-12.3 0C152 440 48 304 48 128c0-6.5 3.9-12.3 9.8-14.8l192-80c3.9-1.6 8.4-1.6 12.3 0l192 80c6 2.5 9.9 8.3 9.8 14.8.1 176-103.9 312-201.7 350.8zM256 411V100l-142.7 59.5c10.1 120.1 77.1 215 142.7 251.5zm-32-66.8c-36.4-39.9-65.8-97.8-76.1-164.5L224 148z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="ml-4 font-bold">Proteksi kerusakan produk</p>
                    <p className="ml-4">Jaminan produk diterima dalam keadaan baik</p>
                  </div>
                </div>
                <div className="mt-5 ml-2 flex items-center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
                    </svg>
                  </div>
                  <div>
                    <p className="ml-4">38 customers are viewing this product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DetailProduct;
