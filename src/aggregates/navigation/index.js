import { Subway } from "../../subwayUtils/";

import { Events } from "./verbs/events";
import { PublicCommands } from "./verbs/public";

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
    Subway.selectAggregate(AGGREGATE_NAME).exposeCommandHandler(
      PublicCommands.NAVIGATE_TO_PRODUCT_DETAILS,
      ({ payload }) => {
        return {
          events: [
            {
              id: Events.PRODUCT_PAGE_SELECTED,
              payload
            }
          ]
        };
      }
    );

    Subway.selectAggregate(AGGREGATE_NAME).exposeCommandHandler(
      PublicCommands.NAVIGATE_TO_CHECKOUT_PAGE,
      ({ payload }) => {
        return {
          events: [
            {
              id: Events.CHECKOUT_PAGE_REQUEST_SUBMITTED,
              payload
            }
          ]
        };
      }
    );
  }
};
