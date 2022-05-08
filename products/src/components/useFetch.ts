import React, {useEffect, useState, useCallback} from "react";
import { Api } from "@frontend-starter/sdk";

const useFetch = (pageNo: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
  
    const sendQuery = useCallback(async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await Api.getPaginatedProducts(pageNo, 4);
        setProducts(res.data as any);
        console.log('++++++++++res.data+++++++', res.data);
        // setProducts((prev: any) => [...prev, ...res.data]);
        setLoading(false);
      } catch (err: any) {
        setError(err);
      }
    }, [pageNo]);
  
    useEffect(() => {
      sendQuery();
    }, [sendQuery, pageNo]);
  
    return { loading, error, products };
  }

export default useFetch;