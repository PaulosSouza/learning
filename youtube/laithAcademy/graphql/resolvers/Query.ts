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

  product: (_, { id: productId }, { db }) => {
    return db.products.find(({ id }) => id === productId);
  },

  categories: (_, _args, { db }) => db.categories,

  category: (_, { id: categoryId }, { db }) => {
    return db.categories.find(({ id }) => id === categoryId);
  },
} as Resolvers["Query"];
