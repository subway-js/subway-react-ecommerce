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
    "NAVIGATE_TO_PRODUCT_DETAILS",
    { product }
  );
};

export const triggerAddToShoppingCart = product => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    'ADD_TO_SHOPPING_CART',
    { product }
  );
};
