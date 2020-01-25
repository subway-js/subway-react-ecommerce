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

export const evtLogoutUserRequestedHandler = {
  command: Events.LOGOUT_USER_REQUESTED,
  handler: aggregateState => {
    return {
      proposal: {
        ...aggregateState,
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
  handler: (aggregateState, { jwt, username }) => ({
    proposal: {
      ...aggregateState,
      userLogged: true,
      loginModalVisible: false,
      jwt,
      username
    }
  })
};

export const evtHandlers = [
  evtUpdateLoginModalVisibilityHandler,
  evtLoginModalRequestedHandler,
  evtUserSuccessfullyAuthenticatedHandler,
  evtLogoutUserRequestedHandler
];
