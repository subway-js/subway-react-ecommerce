import { Subway } from "../../subwayUtils/";
import { Events } from "./verbs/events";
import { Commands } from "./verbs/commands";

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

    // TODO implement ASTERISK selector
    Subway.selectAggregate("*").triggerAfter("LOGIN_MODAL_REQUEST_SUBMITTED", {
      targetAggregate: AGGREGATE_NAME,
      triggeredEvent: Events.LOGIN_MODAL_REQUESTED
    });
  }
};

export { LoginModal } from "./ui/containers/loginModal";
