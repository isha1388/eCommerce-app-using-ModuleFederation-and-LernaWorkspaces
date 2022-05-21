import axios, {AxiosResponse} from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json"
  }
})

http.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log('come inside interceptorsss')
  }
)

class API {
  // getAllProducts<t>(): Promise<t> {
  //   return http.get<Product[]>("/products");
  // }

  getQueriedProducts<T>(query: string): Promise<AxiosResponse> {
    return http.get(`/products?q=${query}`);
  }

  getPaginatedProducts<T>(page_number: number, number_of_entries = 6): Promise<AxiosResponse> {
    return http.get(`/products?_page=${page_number}&_limit=${number_of_entries}`);
  }

  // getRecommendedProducts() {
  //   return http.get<Product[]>("/recommendeds");
  // }
}

export default new API();