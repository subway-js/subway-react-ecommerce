import { Events } from "../verbs/events";

export const evtUpdateLoginModalVisibilityHandler = {
  command: Events.LOGIN_MODAL_VISIBILITY_UPDATED,
  handler: (aggregateState, { show }) => ({
    proposal: {
      ...aggregateState,
      loginModalVisible: show
    }
  })
};

export const evtLoginModalRequestedHandler = {
  command: Events.LOGIN_MODAL_REQUESTED,
  handler: aggregateState => {
    return {
      events: [
        { id: Events.LOGIN_MODAL_VISIBILITY_UPDATED, payload: { show: true } }
      ]
    };
  }
};

export const evtHandlers = [
  evtUpdateLoginModalVisibilityHandler,
  evtLoginModalRequestedHandler
];
