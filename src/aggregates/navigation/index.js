import { Subway } from "../../subwayUtils/";

import { selectProductPage } from "./commandCreators";

import { cmdHandlers } from "./handlers/commands";
import { evtHandlers } from "./handlers/events";

export { Navbar } from "./ui/containers/navbar";
export { Breadcrumbs } from "./ui/containers/breadcrumbs";

export const AGGREGATE_NAME = "NavigationAggregate";
export const initialState = {
  // pages: [],
  currentPage: "home"
  // loggedUser: null
};

export const aggregateConfig = {
  name: AGGREGATE_NAME,
  initialState,
  cmdHandlers,
  evtHandlers,
  bootstrap: () => {
    // TODO create utility function in subwaJS
    Subway.selectAggregate("ProductsAggregate").spy(
      "ProductSelectedForDetails",
      {
        next: () => {
          selectProductPage();
        }
      }
    );
  }
};
