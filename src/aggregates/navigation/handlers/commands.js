import { Commands } from "../verbs/commands";
import { Events } from "../verbs/events";

export const cmdSelectHomePageHandler = {
  command: Commands.SELECT_HOME_PAGE,
  handler: () => ({
    events: [{ id: Events.HOME_PAGE_SELECTED }]
  })
};

export const cmdRequestLoginModalHandler = {
  command: Commands.REQUEST_LOGIN_MODAL,
  handler: () => ({
    events: [{ id: Events.LOGIN_MODAL_REQUEST_SUBMITTED }]
  })
};

export const cmdHandlers = [
  cmdSelectHomePageHandler,
  cmdRequestLoginModalHandler
];
