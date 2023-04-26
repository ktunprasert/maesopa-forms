import { client } from "$lib/pocketbase";
import type { Product } from "$t";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

const allowed: { [shop: string]: string } = {
  maesopa: "แม่โสภา",
  ocha: "โอชา",
  central: "ครัวกลาง",
};

export const load: PageLoad = async function ({ params }) {
  const { shop } = params;
  if (!(shop in allowed)) {
    throw error(404, "Not found");
  }

  return {
    shop,
    thai: allowed[shop],
    params,
  };
};
