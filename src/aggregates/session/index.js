import { Subway } from "../../subwayUtils/";
import { Events } from "./verbs/events";
import { Commands } from "./verbs/commands";
import { PublicCommands } from "./verbs/public";

import { cmdHandlers } from "./handlers/commands";
import { evtHandlers } from "./handlers/events";

export const AGGREGATE_NAME = "SessionAggregate";
export const initialState = {
  userLogged: false,
  loginModalVisible: false,
  jwt: null,
  username: null
};

export const aggregateConfig = {
  name: AGGREGATE_NAME,
  initialState,
  cmdHandlers,
  evtHandlers,
  bootstrap: () => {
    Subway.selectAggregate(AGGREGATE_NAME).exposeCommandHandler(
      PublicCommands.SHOW_LOGIN_MODAL,
      ({ payload }) => {
        return {
          events: [
            {
              id: Events.LOGIN_MODAL_REQUESTED
            }
          ]
        };
      }
    );

    Subway.selectAggregate(AGGREGATE_NAME).exposeCommandHandler(
      PublicCommands.PERFORM_USER_LOGOUT,
      ({ payload }) => {
        return {
          events: [
            {
              id: Events.LOGOUT_USER_REQUESTED
            }
          ]
        };
      }
    );

    Subway.selectAggregate(AGGREGATE_NAME).exposeEvent({
      type: Events.SESSION_STATUS_UPDATED,
      defaultValue: {
        userLogged: false
      }
    });
  }
};

export { LoginModal } from "./ui/containers/loginModal";
