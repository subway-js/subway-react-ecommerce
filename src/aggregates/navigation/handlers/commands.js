import { Commands } from "../verbs/commands";
import { Events } from "../verbs/events";

export const cmdSelectHomePageHandler = {
  command: Commands.SELECT_HOME_PAGE,
  handler: () => ({
    events: [{ id: Events.HOME_PAGE_SELECTED }]
  })
};


export const cmdHandlers = [
  cmdSelectHomePageHandler,
];
