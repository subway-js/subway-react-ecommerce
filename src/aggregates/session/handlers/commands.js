import { Commands } from "../verbs/commands";
import { Events } from "../verbs/events";
import * as MockAPI from "../api/mockApi";

export const cmdHideLoginScreenHandler = {
  command: Commands.UPDATE_LOGIN_MODAL_VISIBILITY,
  handler: ({ state, payload }) => ({
    events: [{ id: Events.LOGIN_MODAL_VISIBILITY_UPDATED, payload }]
  })
};

export const cmdAuthenticateUserHandler = {
  command: Commands.AUTHENTICATE_USER,
  handler: async ({ state, payload }) => {
    const { username, password } = payload;
    const authenticationResult = await MockAPI.authenticate(username, password);
    let events = [];
    const { status } = authenticationResult;
    if (status === "ok") {
      const { jwt } = authenticationResult;
      events = events.concat([
        {
          id: Events.USER_SUCCESSFULLY_AUTHENTICATED,
          payload: { jwt, username }
        }
      ]);
    }

    return {
      events
    };
  }
};

export const cmdHandlers = [
  cmdHideLoginScreenHandler,
  cmdAuthenticateUserHandler
];
