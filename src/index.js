import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { initAggregates } from "./subwayUtils";
import { aggregateConfig as productAggregateConfig } from "./aggregates/products";
import { aggregateConfig as navigationAggregateConfig } from "./aggregates/navigation";
import { aggregateConfig as shoppingCartAggregateConfig } from "./aggregates/shoppingCart";

initAggregates([
  productAggregateConfig,
  navigationAggregateConfig,
  shoppingCartAggregateConfig
]);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
