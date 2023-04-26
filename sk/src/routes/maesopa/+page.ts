import type { PBListResponse } from "$responses";
import type { Product } from "$t";
import type { PageLoad } from "./$types";

export const load: PageLoad = async function ({ fetch }) {
  const response = await fetch("/api/collections/products/records?shops.name?=แม่โสภา");
  const json: PBListResponse<Product> = await response.json();
  return {
    json
  };
};
