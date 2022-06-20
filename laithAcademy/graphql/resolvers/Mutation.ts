import { v4 as uuidV4 } from "uuid";
import { Resolvers } from "../generated/resolvers-types";

import { Category, Product, Review } from "../src/context";

export default {
  addCategory: (_, { input }, { db }) => {
    const { name } = input;

    const category: Category = {
      id: uuidV4(),
      name,
    };

    db.categories.push(category);

    return category;
  },

  addProduct: (_, { input }, { db }) => {
    const { name, description, image, onSale, price, quantity, categoryId } =
      input;

    const product: Product = {
      id: uuidV4(),
      name,
      description,
      image,
      onSale,
      price,
      quantity,
      categoryId: String(categoryId),
    };

    db.products.push(product);

    return product;
  },

  addReview: (_, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input;

    const review: Review = {
      id: uuidV4(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    db.reviews.push(review);

    return review;
  },

  deleteCategory: (_, { id: categoryId }, { db }) => {
    db.categories = db.categories.filter(({ id }) => id !== categoryId);

    db.products = db.products.map((product) => {
      if (product.categoryId === categoryId) {
        return {
          ...product,
          categoryId: undefined,
        };
      }

      return product;
    });
    return true;
  },

  deleteProduct: (_, { id: productId }, { db }) => {
    db.products = db.products.filter(({ id }) => id !== productId);
    db.reviews = db.reviews.filter((review) => review.productId !== productId);

    return true;
  },

  deleteReview: (_, { id: reviewId }, { db }) => {
    db.reviews = db.reviews.filter(({ id }) => reviewId !== id);

    return true;
  },

  updateCategory: (_, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);

    if (index === -1) return null;

    const category = db.categories[index];

    Object.assign(category, input);

    db.categories[index] = category;

    return category;
  },

  updateProduct: (_, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id);

    if (index === -1) return null;

    const product = db.products[index];

    Object.assign(product, input);

    db.products[index] = product;

    return product;
  },

  updateReview: (_, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id);

    if (index === -1) return null;

    const review = db.reviews[index];

    Object.assign(review, input);

    db.reviews[index] = review;

    return review;
  },
} as Resolvers["Mutation"];
