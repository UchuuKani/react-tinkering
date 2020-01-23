import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const makeRequest = async url => {
      setLoading(true);

      let response = await fetch(url);
      let res = await response.json();

      setData(res);
      setLoading(false);
    };

    makeRequest(url);
  }, []);

  return [data, loading];
}

export default useFetch;
