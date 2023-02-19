import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../store/actions/actionCreator";

const AddCategory = () => {
  const { isLoading, errorMsg: error } = useSelector((state) => state.product);

  const [formCategory, setFormCategory] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryProductHandler = async (dataToPost) => {
    try {
      await dispatch(addCategory(dataToPost));
      navigate("/categories");
    } catch (err) {
      console.log(err);
    }
  };

  const formCategoryOnChangeHandler = (event) => {
    const newObj = {
      ...formCategory,
    };

    newObj[event.target.name] = event.target.value;

    setFormCategory(newObj);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const dataToPost = {
      ...formCategory,
    };
    categoryProductHandler(dataToPost);
  };

  if (isLoading) {
    return (
      <section>
        <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
      </section>
    );
  }
  return (
    <div className="AddCategory w-[1500px] h-[100%] content-center">
      {error && <p>{error}</p>}
      {!error && (
        <div className="w-[800px] mx-auto mt-[70px] mb-[100px]">
          <form action="" onSubmit={submitHandler} class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <p class="text-lg font-medium">Add Category</p>

            <div>
              <label class="text-sm font-medium">Name</label>

              <div class="relative mt-1">
                <input name="name" onChange={formCategoryOnChangeHandler} type="text" id="name" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter name" />
              </div>
            </div>

            <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-[50px]">
              Add Category
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
