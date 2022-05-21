import {useEffect, useState, useCallback} from "react";
import { Api, Product } from "@frontend-starter/sdk";
import axios from "axios";

const useFetch = (pageNo: number, searchQuery: string) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const sendQuery = useCallback(async () => {
      try {
        setLoading(true);
        
        if(searchQuery.trim().length){
          const res = await Api.getQueriedProducts(searchQuery);
          setProducts(res.data);
        } else {
          const res = await Api.getPaginatedProducts(pageNo, 6);
          setProducts(((prev: Product[]) => [...prev, ...res.data]));
        }
       
        setLoading(false);
      } catch (err) {
        if(axios.isAxiosError(err)){
          console.log('API failure', err)
          setError(err.message);
        }
      }
    }, [pageNo, searchQuery]);
  
    useEffect(() => {
      sendQuery();
    }, [sendQuery, pageNo, searchQuery]);
  
    return { loading, error, products };
  }

export default useFetch;