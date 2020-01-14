import { Events } from "../verbs/events";

export const evtHomePageSelectedHandler = {
  command: Events.HOME_PAGE_SELECTED,
  handler: aggregateState => ({
    proposal: {
      ...aggregateState,
      currentPage: "home"
    }
  })
};

export const evtProductPageSelectedHandler = {
  command: Events.PRODUCT_PAGE_SELECTED,
  handler: aggregateState => ({
    proposal: {
      ...aggregateState,
      currentPage: "product"
    }
  })
};

export const evtHandlers = [
  evtHomePageSelectedHandler,
  evtProductPageSelectedHandler
];
