import { Subway } from "../../subwayUtils/";

import { Events } from "./verbs/events";
// import { selectProductPage } from "./commandCreators";

import { cmdHandlers } from "./handlers/commands";
import { evtHandlers } from "./handlers/events";

export { Navbar } from "./ui/containers/navbar";
export { Breadcrumbs } from "./ui/containers/breadcrumbs";

export const AGGREGATE_NAME = "NavigationAggregate";

const initialState = {
  currentPage: "home"
};

export const aggregateConfig = {
  name: AGGREGATE_NAME,
  initialState,
  cmdHandlers,
  evtHandlers,
  bootstrap: () => {
    Subway.react({
      onEvent: "ProductsAggregate.ProductSelectedForDetails",
      triggeredEvent: `${AGGREGATE_NAME}.${Events.PRODUCT_PAGE_SELECTED}`
    });
  }
};
