import { Resolvers } from "../generated/resolvers-types";

export default {
  category: ({ categoryId }, _args, { db }) => {
    return db.categories.find(({ id }) => id === categoryId);
  },

  reviews: ({ id }, _args, { db }) => {
    return db.reviews.filter(({ productId }) => id === productId);
  },
} as Resolvers["Product"];
