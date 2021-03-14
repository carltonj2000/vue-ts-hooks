import { ref } from "vue";
import useApi from "./api";

export interface Variant {
  id: string;
  title: string;
  sku: string;
  quantity: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  variants: Variant[];
  price: number;
  tags: string[];
}

export default async function useProducts() {
  const { response: products, request } = useApi<Product[]>(
    "https://ecomm-products.modus.workers.dev/"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { products };
}
