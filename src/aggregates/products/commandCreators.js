import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayUtils/subwayRef";

export const loadProductsList = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.LOAD_PRODUCTS_LIST
  );
};

export const selectProductForDetails = product => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.SELECT_PRODUCT_FOR_DETAILS,
    { product }
  );
};
