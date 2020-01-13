import { Events } from "../verbs/events";

export const evtProductsListLoadedHandler = {
  command: Events.PRODUCTS_LIST_LOADED,
  handler: (aggregateState, { productsList }) => {
    return {
      proposal: {
        ...aggregateState,
        productsList
      }
    };
  }
};

export const evtProductSelectedForDetailsHandler = {
  command: Events.PRODUCT_SELECTED_FOR_DETAILS,
  handler: (aggregateState, { product }) => {
    return {
      proposal: {
        ...aggregateState,
        selectedProduct: product
      }
    };
  }
};

export const evtHandlers = [
  evtProductsListLoadedHandler,
  evtProductSelectedForDetailsHandler
];
