import { Subway } from "../../subwayUtils/";

// import { addProductToCart } from "./commandCreators";
import { Events } from "./verbs/events";
import { cmdHandlers } from "./handlers/commands";
import { evtHandlers } from "./handlers/events";

export const AGGREGATE_NAME = "ShoppingCartAggregate";

export {
  HeaderShoppingCartDropdown
} from "./ui/containers/headerShoppingCartDropdown";
export { Checkout } from "./ui/containers/checkout";

export const aggregateConfig = {
  name: AGGREGATE_NAME,
  initialState: { items: new Map() },
  cmdHandlers,
  evtHandlers,
  bootstrap: () => {
    Subway.selectAggregate("ProductsAggregate").triggerAfter(
      "ADD_TO_SHOPPING_CART_TRIGGERED",
      {
        targetAggregate: AGGREGATE_NAME,
        triggeredEvent: Events.PRODUCT_ADDED_TO_CART
      }
    );
  }
};
