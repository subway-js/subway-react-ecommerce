import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayUtils/";

export const selectHomePage = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(Commands.SELECT_HOME_PAGE);
};

export const showLoginScreen = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    'SHOW_LOGIN_MODAL'
  );
};

export const logout = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    'PERFORM_USER_LOGOUT'
  );
};
