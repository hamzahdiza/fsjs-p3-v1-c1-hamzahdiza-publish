import { useEffect, useState } from "react";
import { useSeletor, useDispatch } from "react-redux";
import { productsFetchSuccess } from "../store/actions/actionCreator";

function useFetch(url) {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const { products } = useSeletor((state) => {
    return state;
  });

  useEffect(() => {
    // fetch("http://localhost:3000/products");
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        // setData(responseJson);
        const data = dispatch(productsFetchSuccess(responseJson));
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  console.log(data);
  return {
    data,
  };
}

export default useFetch;
