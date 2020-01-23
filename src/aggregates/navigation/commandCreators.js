import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayUtils/";

export const selectHomePage = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(Commands.SELECT_HOME_PAGE);
};

export const showLoginScreen = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.REQUEST_LOGIN_MODAL
  );
};
