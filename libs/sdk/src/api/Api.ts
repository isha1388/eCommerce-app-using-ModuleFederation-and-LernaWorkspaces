import axios from "axios";
import {Product} from '../model/Model';

const http = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      "Content-type": "application/json"
    }
  })

class API {
    getAllProducts() {
        return http.get<Product[]>("/products");
    }

    getRecommendedProducts() {
        return http.get<Product[]>("/recommendeds");
    }
}

export default new API();