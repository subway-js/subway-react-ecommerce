import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayRef";

export const loadProductsList = () => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.LOAD_PRODUCTS_LIST
  );
};

export const selectProductForDetails = productId => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.SELECT_PRODUCT_FOR_DETAILS,
    { productId }
  );
};
