import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAdmin } from "../store/actions/actionCreator";

const RegisterAdmin = () => {
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const navigate = useNavigate();

  const { isLoading, errorMsg: error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const registerAdminHandler = async (dataRegister) => {
    try {
      await dispatch(registerAdmin(dataRegister));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const formRegisterOnChangeHandler = (event) => {
    const newObj = {
      ...formRegister,
    };

    newObj[event.target.name] = event.target.value;

    setFormRegister(newObj);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const dataRegister = {
      ...formRegister,
    };

    registerAdminHandler(dataRegister);
  };

  // if (isLoading) {
  //   return (
  //     <section>
  //       <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
  //     </section>
  //   );
  // }
  return (
    <div className="RegisterAdmin w-[1500px] h-[100%] content-center">
      {error && <p>{error}</p>}
      {!error && (
        <div className="w-[800px] mx-auto mt-[70px] mb-[100px]">
          <form onSubmit={submitHandler} class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <p class="text-lg font-medium">Register Admin</p>

            <div>
              <label class="text-sm font-medium">Username</label>

              <div class="relative mt-1">
                <input value={formRegister.username} onChange={formRegisterOnChangeHandler} name="username" type="text" id="username" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter username" />
              </div>
            </div>

            <div>
              <label class="text-sm font-medium">Email</label>

              <div class="relative mt-1">
                <input value={formRegister.email} onChange={formRegisterOnChangeHandler} name="email" type="email" id="email" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" />
              </div>
            </div>

            <div>
              <label class="text-sm font-medium">Password</label>

              <div class="relative mt-1">
                <input value={formRegister.password} onChange={formRegisterOnChangeHandler} name="password" type="password" id="password" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" />
              </div>
            </div>

            <div>
              <label class="text-sm font-medium">Phone Number</label>

              <div class="relative mt-1">
                <input value={formRegister.phoneNumber} onChange={formRegisterOnChangeHandler} name="phoneNumber" type="number" id="phoneNumber" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter phoneNumber" />
              </div>
            </div>

            <div>
              <label class="text-sm font-medium">Address</label>

              <div class="relative mt-1">
                <input value={formRegister.address} onChange={formRegisterOnChangeHandler} name="address" type="text" id="address" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter address" />
              </div>
            </div>

            <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-[50px]">
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegisterAdmin;
