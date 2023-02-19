import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchImages } from "../store/actions/actionCreator";

function ImagePopup() {
  const dispatch = useDispatch();
  const params = useParams();

  const { isLoading, allImage, errorMsg: error } = useSelector((state) => state.product);

  // console.log(params, "UUUUUUUUUUUU");
  // console.log(allImage.Images, "[][][][][]");

  useEffect(() => {
    fetchImagesHandler();
  }, []);

  const fetchImagesHandler = async () => {
    try {
      await dispatch(fetchImages(params));
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
    <>
      {error && <p>{error}</p>}
      {!error && (
        <div className="ImagePopup content-center w-[1500px] h-full mt-[50px]">
          <div class="mx-auto rounded-xl w-[350px] border border-gray-700 bg-gray-800 p-4">
            <div class="ml-4 mt-4 mb-4 grid grid-cols-1 gap-8 md:grid-cols-2  w-[600px]">
              <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img alt="Les Paul" class="object-cover w-full aspect-square rounded-xl" src={allImage?.mainImg} />

                <div class="grid grid-cols-2 gap-4 ">
                  {allImage?.Images?.map((image) => {
                    return <img alt="Les Paul" src={image.imgUrl} class="object-cover w-full aspect-square rounded-xl" />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <a class="mx-auto mt-2 w-[220px] h-[50px] flex items-center justify-center rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50" href="/blog">
              Back To Dashboard
            </a>
          </Link>
        </div>
      )}
    </>
  );
}
export default ImagePopup;
