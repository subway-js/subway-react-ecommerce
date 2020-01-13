import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Subway } from "./subwayUtils/";

import {
  bootstrap as bootstrapProducts,
  AGGREGATE_NAME as ProductsAggregateName,
  initialState as productsInitialState,
  cmdHandlers as productsCmdHandlers,
  evtHandlers as productsEvtHandlers
} from "./aggregates/products";

import {
  // bootstrap as bootstrapNavigation,
  AGGREGATE_NAME as NavigationAggregateName,
  initialState as navigationInitialState
} from "./aggregates/navigation";

const initAggregate = (aggregate, cmdHandlers, evtHandlers) => {
  cmdHandlers.forEach(({ command, handler, onError = null }) => {
    aggregate.setCommandHandler(command, handler, onError);
  });
  evtHandlers.forEach(({ command, handler, onError = null }) => {
    aggregate.setEventHandler(command, handler, onError);
  });
};

const productAggregate = Subway.createAggregate(
  ProductsAggregateName,
  productsInitialState
);

const navigationAggregate = Subway.createAggregate(
  NavigationAggregateName,
  navigationInitialState
);

initAggregate(productAggregate, productsCmdHandlers, productsEvtHandlers);

bootstrapProducts();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
