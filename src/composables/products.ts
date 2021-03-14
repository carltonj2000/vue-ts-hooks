import { ref } from "vue";
import useApi from "./api";

export default async function useProducts() {
  const { response: products, request } = useApi(
    "https://ecomm-products.modus.workers.dev/"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { products };
}
