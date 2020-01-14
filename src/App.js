import React from "react";
import { Container } from "semantic-ui-react";

import { useObserveAggregateState } from "./subwayUtils/";

import { Navbar, Breadcrumbs } from "./aggregates/navigation";
import { ProductList, ProductDetails } from "./aggregates/products";
import { HeaderShoppingCartDropdown } from "./aggregates/shoppingCart";

function App() {
  const [currentPage] = useObserveAggregateState(
    "NavigationAggregate",
    aggregateState => aggregateState.currentPage
  );

  return (
    <Container>
      <Navbar shoppingCartMenuItem={<HeaderShoppingCartDropdown />} />
      <br />
      <br />
      <br />
      <br />
      <Breadcrumbs />
      <br />
      <br />
      {(!currentPage || currentPage) === "home" && <ProductList />}
      {currentPage === "product" && <ProductDetails />}
    </Container>
  );
}

export default App;
