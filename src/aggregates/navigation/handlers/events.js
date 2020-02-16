import { Events } from "../verbs/events";

export const evtHomePageSelectedHandler = {
  command: Events.HOME_PAGE_SELECTED,
  handler: ({ state }) => ({
    proposal: {
      ...state,
      selectedProduct: null,
      currentPage: "home"
    }
  })
};

export const evtProductPageSelectedHandler = {
  command: Events.PRODUCT_PAGE_SELECTED,
  handler: ({ state, payload }) => {
    return {
    proposal: {
      ...state,
      selectedProduct: payload.product,
      currentPage: "product"
    }}
  }
};

export const evtCheckoutPageRequestSubmittedHandler = {
  command: Events.CHECKOUT_PAGE_REQUEST_SUBMITTED,
  handler: ({ state }) => ({
    proposal: {
      ...state,
      selectedProduct: null,
      currentPage: "checkout"
    }
  })
};

export const evtHandlers = [
  evtHomePageSelectedHandler,
  evtProductPageSelectedHandler,
  evtCheckoutPageRequestSubmittedHandler
];
