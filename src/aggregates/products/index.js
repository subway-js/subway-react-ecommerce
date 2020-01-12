import { loadProductsList } from "./commandCreators";

export const AGGREGATE_NAME = "ProductsAggregate";
export const initialState = {
  productsList: [],
  selectedProductId: null
};

export { cmdHandlers } from "./handlers/commands";
export { evtHandlers } from "./handlers/events";

export { ProductList } from "./ui/containers/productList";
export { ProductDetails } from "./ui/containers/productDetails";

export const bootstrap = () => {
  console.log("> Bootstrap Products aggregate");
  loadProductsList();
};
