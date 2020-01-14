import { Subway } from "../../subwayUtils/";

import { selectProductPage } from "./commandCreators";

export { Navbar } from "./ui/containers/navbar";
export { Breadcrumbs } from "./ui/containers/breadcrumbs";

export const AGGREGATE_NAME = "NavigationAggregate";
export const initialState = {
  // pages: [],
  currentPage: "home"
  // loggedUser: null
};

export { cmdHandlers } from "./handlers/commands";
export { evtHandlers } from "./handlers/events";

export const bootstrap = () => {
  // TODO create utility function in subwaJS
  Subway.selectAggregate("ProductsAggregate").spy("ProductSelectedForDetails", {
    next: () => {
      selectProductPage();
    }
  });
};
