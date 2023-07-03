import { useEffect, useState } from "react";
import { getFetchData } from "../api/api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [laoding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getFetchData(url);
      setData(data);
      setLoading(false);
    };
    getData();
  }, []);

  return { data: data, laoding: laoding };
};
export default useFetch;
