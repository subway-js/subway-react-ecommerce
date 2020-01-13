import React from "react";
import { Breadcrumb } from "semantic-ui-react";

import { useSpyAggregateEvent } from "../../../../subwayUtils/";

export function Breadcrumbs() {
  const [selectedProduct] = useSpyAggregateEvent(
    "ProductsAggregate",
    "ProductSelectedForDetails",
    ({ product }) => ({ id: product.id, title: product.title })
  );

  console.log(selectedProduct);
  return (
    <Breadcrumb>
      <Breadcrumb.Section color="teal" link>
        Store
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      {(!selectedProduct || !selectedProduct.id) && (
        <Breadcrumb.Section active>All Products</Breadcrumb.Section>
      )}
      {selectedProduct && selectedProduct.id && selectedProduct.title && (
        <>
          <Breadcrumb.Section active>Product</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>
            {selectedProduct.title}
          </Breadcrumb.Section>
        </>
      )}
    </Breadcrumb>
  );
}
