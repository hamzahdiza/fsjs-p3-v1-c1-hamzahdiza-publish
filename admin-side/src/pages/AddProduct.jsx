const AddProduct = () => {
  return (
    <div className="AddProduct w-[1500px] h-[100%] content-center">
      <div className="w-[800px] mx-auto mt-[70px] mb-[100px]">
        <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
          <p class="text-lg font-medium">Create Product</p>

          <div>
            <label for="name" class="text-sm font-medium">
              Name
            </label>

            <div class="relative mt-1">
              <input type="text" id="name" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter name" />
            </div>
          </div>

          <div>
            <label for="description" class="text-sm font-medium">
              Description
            </label>

            <div class="relative mt-1">
              <input type="text" id="description" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter description" />
            </div>
          </div>

          <div>
            <label for="price" class="text-sm font-medium">
              Price
            </label>

            <div class="relative mt-1">
              <input type="number" id="price" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter price" />
            </div>
          </div>

          <div>
            <label for="category" class="text-sm font-medium">
              Category
            </label>

            <div class="relative mt-1">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>FLANNEL</option>
                <option>T-SHIRT OVERSIZE</option>
                <option>CAP</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label for="imgUrl" class="text-sm font-medium">
              Image URL
            </label>

            <div class="relative mt-1">
              <input type="text" id="imgUrl" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter imgUrl" />
            </div>

            <div class="relative mt-1">
              <input type="text" id="imgUrl" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter imgUrl" />
            </div>

            <div class="relative mt-1">
              <input type="text" id="imgUrl" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter imgUrl" />
            </div>
          </div>

          <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-[50px]">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
