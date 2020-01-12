import React from "react";
import { Container } from "semantic-ui-react";

import { Navbar, Breadcrumbs } from "./aggregates/navigation";
import { ProductList, ProductDetails } from "./aggregates/products";
import { HeaderShoppingCartDropdown } from "./aggregates/shoppingCart";

function App() {
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
      <ProductList />
      <ProductDetails />
    </Container>
  );
}

export default App;
