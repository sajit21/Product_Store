import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

const BASE_URL = "http://localhost:3000";
export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data.data, error: null });
    } catch (err) {
      if (err.status == 429)
        set({ error: "Rate limit exceeded", products: [] });
      else set({ error: "Something went wrong", products: [] });
    } finally {
      set({ loading: false });
    }
  },

  deleteProducts: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("product deleted");
    } catch (error) {
      console.log("error in deleteproduct function", error);
      toast.error("something went wrong");
    }
    finally{
        set({ loading: false });
    }
  },
}));
