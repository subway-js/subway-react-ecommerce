import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayUtils/";

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

export const triggerAddToShoppingCart = product => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.TRIGGER_ADD_TO_SHOPPING_CART,
    { product }
  );
};
