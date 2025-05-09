
import axios from 'axios';



// const API_URL = "http://localhost:4000/api/v1/product"
const API_URL = "https://medzionpharma-api.onrender.com/api/v1/product"
export const api = axios.create({
    baseURL: API_URL,
})

export const productsAll = async () => {
    try {
        const response = await api.get("/allproducts");
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "Failed to Fetch Product"
        throw new Error(errorMessage)
    }
};

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "Failed to Get One Product"
        throw new Error(errorMessage)
    }
}

export const getRelatedProducts = async (category, limit = 2, excludeId) => {
    try {
      const response = await productsAll();
      let products = response.products || response; // Adjust based on API response
      products = products.filter((p) => p.category === category && p._id !== excludeId);
      return products.slice(0, limit);
    } catch (error) {
      console.error("Failed to fetch related products:", error);
      return [];
    }
  };
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  export const searchProducts = async (word) => {
    try {
      const response = await api.get('/search', { params: { query: word } });
      console.log('Searching.....', response.data);
      if (!response.data.success) {
        throw new Error(response.data.message || 'Search failed');
      }
      return response.data; // Returns { success: true, products: [...] }
    } catch (error) {
      console.error('Search failed:', error.message);
      throw new Error(error.response?.data?.message || 'Couldn’t find products');
    }
  };