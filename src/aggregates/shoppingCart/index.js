import { Subway } from "../../subwayUtils/";

import { addProductToCart } from "./commandCreators";
//
import { cmdHandlers } from "./handlers/commands";
import { evtHandlers } from "./handlers/events";

export const AGGREGATE_NAME = "ShoppingCartAggregate";
export const initialState = {
  items: new Map()
};

export {
  HeaderShoppingCartDropdown
} from "./ui/containers/headerShoppingCartDropdown";

// export { cmdHandlers } from "./handlers/commands";
// export { evtHandlers } from "./handlers/events";

export const aggregateConfig = {
  name: AGGREGATE_NAME,
  initialState,
  cmdHandlers,
  evtHandlers,
  bootstrap: () => {
    // TODO create utility function in subwaJS
    Subway.selectAggregate("ProductsAggregate").spy(
      "ADD_TO_SHOPPING_CART_TRIGGERED",
      {
        next: ({ product }) => {
          addProductToCart(product);
        }
      }
    );
  }
};
