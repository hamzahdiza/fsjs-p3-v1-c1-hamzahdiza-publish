import { useState } from "react";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="Dashboard bg-gray-100 font-family-karla flex w-full">
      <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div class="p-6">
          <img src="" alt="" />
        </div>
        <nav class="text-white text-base font-semibold pt-3">
          <a href="index.html" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
            <i class="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a href="blank.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i class="fas fa-sticky-note mr-3"></i>
            Categories
          </a>
          <a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i class="fas fa-table mr-3"></i>
            Register Admin
          </a>
          <a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i class="fas fa-align-left mr-3"></i>
            Sign Out
          </a>
        </nav>
      </aside>

      <div class="w-full flex flex-col h-screen overflow-y-hidden">
        {/* <!-- Desktop Header --> */}
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div class="w-1/2"></div>
          <div x-data="{ isOpen: false }" class="relative w-1/2 flex justify-end">
            <button onclick="isOpen = !isOpen" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
              <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
            </button>
            <button x-show="isOpen" onclick="isOpen = false" class="h-full w-full fixed inset-0 cursor-default"></button>
            <div x-show="isOpen" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
              <a href="#" class="block px-4 py-2 account-link hover:text-white">
                Account
              </a>
              <a href="#" class="block px-4 py-2 account-link hover:text-white">
                Support
              </a>
              <a href="#" class="block px-4 py-2 account-link hover:text-white">
                Sign Out
              </a>
            </div>
          </div>
        </header>

        <div class="w-full overflow-x-auto border-t flex flex-col">
          <main class="w-full flex-grow p-6">
            <h1 class="text-3xl text-black pb-2">Dashboard</h1>

            {/* <div class=" mt-2 overflow-x">
              <table class=" bg-white table-auto overflow-scroll w-full">
                <thead class="bg-gray-800 text-white">
                  <tr>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">No</th>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">Name</th>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">Category</th>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">Price</th>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">Created By</th>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">Main Image</th>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">Images</th>
                    <th class="px-4 py-2 uppercase font-semibold text-sm">Action</th>
                  </tr>
                </thead>
                <tbody class="text-gray-700">
                  <tr>
                    <td class=" text-left py-3 px-4">1</td>
                    <td class=" text-left py-3 px-4">Erigo Kemeja Flannel Emily Cream</td>
                    <td class=" text-left py-3 px-4">FLANNEL</td>
                    <td class=" text-left py-3 px-4">IDR 130000</td>
                    <td class=" text-left py-3 px-4">IDR 130000</td>
                    <td class=" text-left py-3 px-4">IDR 130000</td>
                    <td class=" text-left py-3 px-4">IDR 130000</td>
                    <td class=" text-left py-3 px-4">IDR 130000</td>
                  </tr>
                </tbody>
              </table>
            </div> */}

            <div class="overflow-auto">
              <table class="table-auto overflow-x-auto  w-full">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-20 px-4 py-2">No.</th>
                    <th class="w-60 px-4 py-2">Name</th>
                    <th class="w-60 px-4 py-2">Category</th>
                    <th class="w-60 px-4 py-2">Price</th>
                    <th class="w-60 px-4 py-2">Created By</th>
                    <th class="w-60 px-4 py-2">Main Image</th>
                    <th class="w-60 px-4 py-2">Images</th>
                    <th class="w-60 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody class="text-gray-700">
                  <tr>
                    <td class="w-60 text-left py-3 px-4">1</td>
                    <td class="w-60 text-left py-3 px-4">Erigo Kemeja Flannel Emily Cream</td>
                    <td class="w-60 text-left py-3 px-4">FLANNEL</td>
                    <td class="w-60 text-left py-3 px-4">IDR 130000</td>
                    <td class="w-60 text-left py-3 px-4">hamzahdiza</td>
                    <td class="w-150 text-left py-3 px-4">
                      <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/products/e6c500da181441d2b828c7562762b207_tplv-o3syd03w52-origin-jpeg_354db1a7-233b-43e6-a5f7-153882e6b897.jpg?v=1676046830" alt="" />
                    </td>
                    <td class="w-60 text-left py-3 px-4">Tombol</td>
                    <td class="w-150 text-left py-3 ">
                      <a class="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="/download">
                        Edit
                      </a>
                      <a class="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="/download">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
