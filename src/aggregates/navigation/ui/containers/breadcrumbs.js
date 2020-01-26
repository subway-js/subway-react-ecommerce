import React from "react";
import { Breadcrumb, Button, Grid } from "semantic-ui-react";

import {
  useSpyAggregateEvent,
  useObserveAggregateState
} from "../../../../subwayUtils/";
import { selectHomePage } from "../../commandCreators";

import { AGGREGATE_NAME as NAVIGATION_AGGREGATE_NAME } from "../../";

export function Breadcrumbs() {
  const [selectedProduct] = useSpyAggregateEvent(
    "ProductsAggregate",
    "ProductSelectedForDetails",
    ({ product }) => ({ id: product.id, title: product.title })
  );

  const [currentPage] = useObserveAggregateState(
    NAVIGATION_AGGREGATE_NAME,
    aggregateState => aggregateState.currentPage
  );

  return (
    <Grid relaxed columns={2}>
      <Grid.Column>
        <Breadcrumb>
          {currentPage === "home" && (
            <Breadcrumb.Section active>Products</Breadcrumb.Section>
          )}
          {currentPage === "product" &&
            selectedProduct &&
            selectedProduct.id &&
            selectedProduct.title && (
              <>
                <Breadcrumb.Section
                  active
                  link
                  onClick={() => selectHomePage()}
                >
                  Products
                </Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>
                  {selectedProduct.title}
                </Breadcrumb.Section>
              </>
            )}
          {currentPage === "checkout" && (
            <>
              <Breadcrumb.Section active link onClick={() => selectHomePage()}>
                Products
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active>Checkout</Breadcrumb.Section>
            </>
          )}
        </Breadcrumb>
      </Grid.Column>
      {(currentPage === "product" || currentPage === "checkout") && (
        <Grid.Column textAlign="right">
          <Button
            onClick={() => selectHomePage()}
            size="tiny"
            content="Back to products"
            icon="angle left"
            color="teal"
            labelPosition="left"
          />
        </Grid.Column>
      )}
    </Grid>
  );
}
