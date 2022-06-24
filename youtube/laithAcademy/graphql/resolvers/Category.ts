import { Resolvers } from "../generated/resolvers-types";

export default {
  products: (_, { filter }, { db }) => {
    let filteredProducts = db.products;

    if (filter?.onSale !== undefined) {
      filteredProducts = db.products.filter(
        ({ onSale }) => onSale === filter.onSale
      );
    }

    return filteredProducts;
  },
} as Resolvers["Category"];
