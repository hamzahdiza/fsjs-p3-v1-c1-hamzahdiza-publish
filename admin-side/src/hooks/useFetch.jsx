import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setData(responseJson);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);
  console.log(data);

  return { data };
}

export default useFetch;
