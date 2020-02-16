import { Events } from "../verbs/events";

export const evtUpdateLoginModalVisibilityHandler = {
  command: Events.LOGIN_MODAL_VISIBILITY_UPDATED,
  handler: ({ state, payload }) => {
    return {
      proposal: {
        ...state,
        loginModalVisible: payload.show
      }
    };
  }
};

export const evtLoginModalRequestedHandler = {
  command: Events.LOGIN_MODAL_REQUESTED,
  handler: ({ state, payload }) => {
    return {
      events: [
        { id: Events.LOGIN_MODAL_VISIBILITY_UPDATED, payload: { show: true } }
      ]
    };
  }
};

export const evtLogoutUserRequestedHandler = {
  command: Events.LOGOUT_USER_REQUESTED,
  handler: ({ state, payload }) => {
    return {
      proposal: {
        ...state,
        userLogged: false,
        jwt: null,
        username: null
      },
      events: [{ id: Events.USER_LOGGED_OUT }]
    };
  }
};

export const evtUserSuccessfullyAuthenticatedHandler = {
  command: Events.USER_SUCCESSFULLY_AUTHENTICATED,
  handler: ({ state, payload }) => {
    const { jwt, username } = payload;
    return {
      proposal: {
        ...state,
        userLogged: true,
        loginModalVisible: false,
        jwt,
        username
      }
    };
  }
};

export const evtHandlers = [
  evtUpdateLoginModalVisibilityHandler,
  evtLoginModalRequestedHandler,
  evtUserSuccessfullyAuthenticatedHandler,
  evtLogoutUserRequestedHandler
];
