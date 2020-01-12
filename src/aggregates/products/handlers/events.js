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
  handler: (aggregateState, { productId }) => {
    return {
      proposal: {
        ...aggregateState,
        selectedProductId: productId
      }
    };
  }
};

export const evtHandlers = [
  evtProductsListLoadedHandler,
  evtProductSelectedForDetailsHandler
];
