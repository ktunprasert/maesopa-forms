import { error } from "@sveltejs/kit";
import { ALLOWED_SHOPS } from "$consts";
import type { PageLoad } from "./$types";

export const load: PageLoad = async function ({ params }) {
  const { shop } = params;
  if (!(shop in ALLOWED_SHOPS)) {
    throw error(404, "Not found");
  }

  return {
    shop,
    thai: ALLOWED_SHOPS[shop],
    params,
  };
};
