import { Events } from "../verbs/events";

export const evtProductsListLoadedHandler = {
  command: Events.PRODUCTS_LIST_LOADED,
  handler: ({ state, payload = {} }) => {
    const { productsList } = payload;
    return {
      proposal: {
        ...state,
        productsList
      }
    };
  }
};

// TODO review communication messaging logic
export const evtProductSelectedForDetailsHandler = {
  command: Events.PRODUCT_SELECTED_FOR_DETAILS,
  handler: ({ state, payload = {} }) => {
    const { product } = payload;
    return {
      proposal: {
        ...state,
        selectedProduct: product
      }
    };
  }
};

export const evtHandlers = [
  evtProductsListLoadedHandler,
  evtProductSelectedForDetailsHandler
];
