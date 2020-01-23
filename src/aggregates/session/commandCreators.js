import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayUtils/";

export const showLoginScreen = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.UPDATE_LOGIN_MODAL_VISIBILITY,
    { show: true }
  );
};

export const hideLoginScreen = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.UPDATE_LOGIN_MODAL_VISIBILITY,
    { show: false }
  );
};
