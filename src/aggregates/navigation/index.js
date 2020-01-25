import { Subway } from "../../subwayUtils/";

import { Events } from "./verbs/events";

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
    Subway.selectAggregate("ProductsAggregate").triggerAfter(
      "ProductSelectedForDetails",
      {
        targetAggregate: AGGREGATE_NAME,
        triggeredEvent: Events.PRODUCT_PAGE_SELECTED
      }
    );

    Subway.selectAggregate("*").triggerAfter("CHECKOUT_PAGE_REQUESTED", {
      targetAggregate: AGGREGATE_NAME,
      triggeredEvent: Events.CHECKOUT_PAGE_REQUEST_SUBMITTED
    });
  }
};
