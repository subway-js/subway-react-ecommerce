export { Navbar } from "./ui/containers/navbar";
export { Breadcrumbs } from "./ui/containers/breadcrumbs";

export const AGGREGATE_NAME = "NavigationAggregate";
export const initialState = {
  pages: [],
  currentPage: null,
  loggedUser: null
};
