import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayUtils/";

export const selectProductPage = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.SELECT_PRODUCT_PAGE
  );
};

export const selectHomePage = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(Commands.SELECT_HOME_PAGE);
};
