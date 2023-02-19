import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCategories, fetchProductBySlug, postAdd, postEdit } from "../store/actions/actionCreator";

const FormAddEdit = () => {
  const { isLoading, productDetail, categories, errorMsg: error } = useSelector((state) => state.product);
  console.log(productDetail, "Formmm");

  // console.log(categories, "CATEGORY");

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [formProduct, setFormProduct] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    categoryId: "",
    images: [],
  });

  // console.log(params, "UUUUUUUUUUUU");
  useEffect(() => {
    dispatch(fetchCategories());
    if (params.slugProduct) {
      fetchDetailHandler(params);
    }
  }, [params]);

  useEffect(() => {
    setFormProduct({
      name: productDetail?.name || "",
      description: productDetail?.description || "",
      price: productDetail?.price || "",
      mainImg: productDetail?.mainImg || "",
      categoryId: productDetail?.categoryId || "",
      images: productDetail.Images?.map((el) => el?.imgUrl) || [],
    });
  }, [productDetail]);

  // console.log(productDetail.Images, "HHHHHHHHHHHHHHHHHHHH");

  const fetchDetailHandler = async (params) => {
    try {
      // console.log(params, "MMMMMMMMMMMMM")

      await dispatch(fetchProductBySlug(params));
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(formProduct.images, "Detail Product");

  // Post Data
  const addeditProductHandler = async (dataToPost) => {
    try {
      if (params.slugProduct) {
        await dispatch(postEdit(dataToPost, params));
        navigate("/");
      } else {
        await dispatch(postAdd(dataToPost));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formAddEditOnChangeHandler = (event) => {
    const newObj = {
      ...formProduct,
    };

    newObj[event.target.name] = event.target.value;

    setFormProduct(newObj);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const dataToPost = {
      ...formProduct,
    };
    // console.log(dataToPost, "////////////////////");
    addeditProductHandler(dataToPost);
    // navigate("/");
  };

  if (isLoading) {
    return (
      <section>
        <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
      </section>
    );
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {!error && (
        <div className="w-[800px] mx-auto mb-[100px]">
          <form onSubmit={submitHandler} class=" mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <div>
              <label for="name" class="text-sm font-medium">
                Name
              </label>

              <div class="relative mt-1">
                <input name="name" value={formProduct.name} onChange={formAddEditOnChangeHandler} type="text" id="name" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter name" />
              </div>
            </div>

            <div>
              <label for="description" class="text-sm font-medium">
                Description
              </label>

              <div class="relative mt-1">
                <input name="description" value={formProduct.description} onChange={formAddEditOnChangeHandler} type="text" id="description" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter description" />
              </div>
            </div>

            <div>
              <label for="price" class="text-sm font-medium">
                Price
              </label>

              <div class="relative mt-1">
                <input name="price" value={formProduct.price} onChange={formAddEditOnChangeHandler} type="number" id="price" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter price" />
              </div>
            </div>

            <div>
              <label for="category" class="text-sm font-medium">
                Category
              </label>

              <div class="relative mt-1">
                <select name="categoryId" value={formProduct.categoryId} onChange={formAddEditOnChangeHandler} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  {categories.map((el) => {
                    return <option value={el.id}>{el.name}</option>;
                  })}
                  {/* <option>FLANNEL</option>
                <option>T-SHIRT OVERSIZE</option>
                <option>CAP</option> */}
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
                Main Image
              </label>

              <div class="relative mt-1">
                <input name="mainImg" value={formProduct.mainImg} onChange={formAddEditOnChangeHandler} type="text" id="imgUrl" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter imgUrl" />
              </div>

              {formProduct?.images?.map((image, i) => {
                // console.log(image, "????????????????");
                return (
                  <div class="relative mt-4" key={image.id}>
                    <label for="imgUrl" class="text-sm font-medium">
                      Sub Image {i + 1}
                    </label>
                    <input
                      onChange={(e) => {
                        const currIngredient = [...formProduct.images];
                        currIngredient[i] = e.target.value;
                        // console.log(currIngredient,'<<<< curent')
                        // if(!currIngredient){
                        setFormProduct({
                          ...formProduct,
                          images: currIngredient,
                        });
                        // }
                      }}
                      type="text"
                      id="imgUrl"
                      class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                      placeholder="Enter imgUrl"
                      value={image}
                      name={`images[${i}]`}
                    />
                  </div>
                );
              })}

              {/* {productDetail?.Images?.map((image) => {
              <div class="relative mt-1" key={image.id}>
                <input type="text" id="imgUrl" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter imgUrl" />
              </div>;
            })} */}
            </div>

            {!params.slugProduct && (
              <div>
                <label class="text-sm font-medium mt-4">Add image</label>

                <div class="relative mt-1">
                  <input type="text" id="imgUrl" name="images1" onChange={formAddEditOnChangeHandler} class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Sub Image" />
                </div>
                <div class="relative mt-1">
                  <input type="text" id="imgUrl" name="images2" onChange={formAddEditOnChangeHandler} class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Sub Image" />
                </div>
                <div class="relative mt-1">
                  <input type="text" id="imgUrl" name="images3" onChange={formAddEditOnChangeHandler} class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Sub Image" />
                </div>
                <div class="relative mt-1">
                  <input type="text" id="imgUrl" name="images4" onChange={formAddEditOnChangeHandler} class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Sub Image" />
                </div>
              </div>
            )}

            {params?.slugProduct && (
              <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-[50px]">
                Edit Product
              </button>
            )}
            {!params?.slugProduct && (
              <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-[50px]">
                Add Product
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default FormAddEdit;
