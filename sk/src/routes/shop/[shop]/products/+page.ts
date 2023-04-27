import { client } from "$lib/pocketbase";
import type { Product } from "$t";
import { error } from "@sveltejs/kit";
import { ALLOWED_SHOPS } from "$consts";
import type { PageLoad } from "./$types";

export const load: PageLoad = async function ({ params }) {
  const { shop } = params;
  if (!(shop in ALLOWED_SHOPS)) {
    throw error(404, "Not found");
  }

  const json = await client.collection("products").getFullList<Product>(-1, {
    filter: `shops.name ?= "${ALLOWED_SHOPS[shop]}"`,
    expand: "templates, category"
  });

  return {
    json,
    shop,
    params,
    thai: ALLOWED_SHOPS[shop],
  };
};
