import { Commands } from "../verbs/commands";
import { Events } from "../verbs/events";
import * as MockAPI from "../api/mockApi";

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

export const cmdSubmitOrderHandler = {
  command: Commands.SUBMIT_ORDER,
  handler: async (aggregateState, { items }) => {
    const orderSubmissionResult = await MockAPI.submitSuccessfulOrder(items);
    let events = [];
    const { status } = orderSubmissionResult;
    if (status === "ok") {
      events = events.concat([
        {
          id: Events.ORDER_PROCESSED,
          payload: { successful: true, items }
        }
      ]);
    }

    return {
      events
    };
  }
};

export const cmdHandlers = [
  cmdGoToCheckoutHandler,
  cmdRequestLoginModalHandler,
  cmdSubmitOrderHandler
];
