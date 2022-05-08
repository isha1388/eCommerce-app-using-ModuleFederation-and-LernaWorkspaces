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

    getPaginatedProducts(page_number: number, number_of_entries = 4) {
      return http.get<Product[]>(`/products?_page=${page_number}&_limit=${number_of_entries}`);
  }

    getRecommendedProducts() {
        return http.get<Product[]>("/recommendeds");
    }
}

export default new API();