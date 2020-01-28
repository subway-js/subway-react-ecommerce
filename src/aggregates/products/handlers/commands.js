import { Commands } from "../verbs/commands";
import { Events } from "../verbs/events";

import * as MockAPI from "../api/mockApi";

export const cmdLoadProductsListHandler = {
  command: Commands.LOAD_PRODUCTS_LIST,
  handler: async (aggregateState, payload) => {
    const productsList = await MockAPI.getProductsList();
    return {
      events: [{ id: Events.PRODUCTS_LIST_LOADED, payload: { productsList } }]
    };
  }
};

export const cmdSelectProductForDetailsHandler = {
  command: "NAVIGATE_TO_PRODUCT_DETAILS",
  handler: (aggregateState, { product }) => ({
    // TODO load product details???
    events: [{ id: Events.PRODUCT_SELECTED_FOR_DETAILS, payload: { product } }]
  })
};

export const cmdHandlers = [
  cmdLoadProductsListHandler,
  cmdSelectProductForDetailsHandler,
];
