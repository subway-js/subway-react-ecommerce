import { AGGREGATE_NAME } from "./index";
import { Commands } from "./verbs/commands";
import { Subway } from "../../subwayUtils/";

export const addProductToCart = product => {
  Subway.selectAggregate(AGGREGATE_NAME).sendCommand(
    Commands.ADD_PRODUCT_TO_CART,
    { product }
  );
};
