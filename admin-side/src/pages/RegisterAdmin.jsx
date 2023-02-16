const RegisterAdmin = () => {
  return (
    <div className="RegisterAdmin w-[1500px] h-[100%] content-center">
      <div className="w-[800px] mx-auto mt-[70px] mb-[100px]">
        <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
          <p class="text-lg font-medium">Register Admin</p>

          <div>
            <label for="username" class="text-sm font-medium">
              Username
            </label>

            <div class="relative mt-1">
              <input type="text" id="username" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter username" />
            </div>
          </div>

          <div>
            <label for="email" class="text-sm font-medium">
              Email
            </label>

            <div class="relative mt-1">
              <input type="email" id="email" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" />
            </div>
          </div>

          <div>
            <label for="password" class="text-sm font-medium">
              Password
            </label>

            <div class="relative mt-1">
              <input type="password" id="password" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" />
            </div>
          </div>

          <div>
            <label for="phoneNumber" class="text-sm font-medium">
              Phone Number
            </label>

            <div class="relative mt-1">
              <input type="number" id="phoneNumber" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter phoneNumber" />
            </div>
          </div>

          <div>
            <label for="address" class="text-sm font-medium">
              Address
            </label>

            <div class="relative mt-1">
              <input type="text" id="address" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter address" />
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

export default RegisterAdmin;
