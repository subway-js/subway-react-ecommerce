import { Commands } from "../verbs/commands";
import { Events } from "../verbs/events";

export const cmdHideLoginScreenHandler = {
  command: Commands.UPDATE_LOGIN_MODAL_VISIBILITY,
  handler: (aggregateState, payload) => ({
    events: [{ id: Events.LOGIN_MODAL_VISIBILITY_UPDATED, payload }]
  })
};

export const cmdHandlers = [cmdHideLoginScreenHandler];
