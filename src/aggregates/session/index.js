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
    // TODO quick mapping command => event in nav login button

    Subway.respondToCommand(PublicCommands.SHOW_LOGIN_MODAL, {
      targetAggregate: AGGREGATE_NAME,
      triggeredEvent: Events.LOGIN_MODAL_REQUESTED
    });

    Subway.respondToCommand(PublicCommands.PERFORM_USER_LOGOUT, {
      targetAggregate: AGGREGATE_NAME,
      triggeredEvent: Events.LOGOUT_USER_REQUESTED
    });
  }
};

export { LoginModal } from "./ui/containers/loginModal";
