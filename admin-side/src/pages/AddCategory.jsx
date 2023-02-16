const AddCategory = () => {
  return (
    <div className="AddCategory w-[1500px] h-[100%] content-center">
      <div className="w-[800px] mx-auto mt-[70px] mb-[100px]">
        <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
          <p class="text-lg font-medium">Add Category</p>

          <div>
            <label for="name" class="text-sm font-medium">
              Name
            </label>

            <div class="relative mt-1">
              <input type="text" id="name" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter name" />
            </div>
          </div>

          <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-[50px]">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
