import { Commands } from "../verbs/commands";
import { Events } from "../verbs/events";

export const cmdGoToCheckoutHandler = {
  command: Commands.GO_TO_CHECKOUT,
  handler: async (aggregateState, payload) => ({
    events: [{ id: Events.CHECKOUT_PAGE_REQUESTED }]
  })
};

export const cmdRequestLoginModalHandler = {
  command: Commands.REQUEST_LOGIN_MODAL,
  handler: () => ({
    events: [{ id: Events.LOGIN_MODAL_REQUEST_SUBMITTED }]
  })
};

export const cmdHandlers = [
  cmdGoToCheckoutHandler,
  cmdRequestLoginModalHandler
];
