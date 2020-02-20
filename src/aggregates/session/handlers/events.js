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
      // events: [{ id: Events.USER_LOGGED_OUT }]
      events: [{
        id: Events.SESSION_STATUS_UPDATED,
        payload: {
          userLoggedIn: false,
        }
      }],
    };
  }
};

export const evtUserSuccessfullyAuthenticatedHandler = {
  command: Events.USER_SUCCESSFULLY_AUTHENTICATED,
  handler: ({ state, payload }) => {
    const { jwt, username } = payload;

    // TODO: do we need Subway...exposeEvents() at all?
    // - inject broadcastEvent() ?
    // - add return field exposeEvents ?
    return {
      events: [{
        id: Events.SESSION_STATUS_UPDATED,
        payload: {
          userLogged: true,
          username
        }
      }],
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
