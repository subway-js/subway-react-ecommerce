import { Subway } from "../../subwayUtils/";
import { loadProductsList } from "./commandCreators";

import { cmdHandlers } from "./handlers/commands";
import { evtHandlers } from "./handlers/events";

export const AGGREGATE_NAME = "ProductsAggregate";
export const initialState = {
  productsList: [],
  selectedProduct: null
};

// export { cmdHandlers } from "./handlers/commands";
// export { evtHandlers } from "./handlers/events";

export { ProductList } from "./ui/containers/productList";
export { ProductDetails } from "./ui/containers/productDetails";

export const aggregateConfig = {
  name: AGGREGATE_NAME,
  initialState,
  cmdHandlers,
  evtHandlers,
  bootstrap: () => loadProductsList()
};
