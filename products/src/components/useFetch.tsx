import React, {useEffect, useState, useCallback} from "react";
import { Api } from "@frontend-starter/sdk";

const useFetch = (pageNo: number, searchQuery: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    let res: any;

    const sendQuery = useCallback(async () => {
      try {
        setLoading(true);
        setError(false);
        
        if(searchQuery.trim().length){
          res = await Api.getQueriedProducts(searchQuery);
          setProducts(res.data);
        } else {
          res = await Api.getPaginatedProducts(pageNo, 4);
          setProducts(((prev: any) => [...prev, ...res.data]) as any);
        }
       
        setLoading(false);
      } catch (err: any) {
        setError(err);
      }
    }, [pageNo, searchQuery]);
  
    useEffect(() => {
      sendQuery();
    }, [sendQuery, pageNo, searchQuery]);
  
    return { loading, error, products };
  }

export default useFetch;