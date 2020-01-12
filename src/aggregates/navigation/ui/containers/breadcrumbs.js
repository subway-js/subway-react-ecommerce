import React from "react";
import { Breadcrumb } from "semantic-ui-react";

export function Breadcrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Section color="teal" link>
        Store
      </Breadcrumb.Section>
      <Breadcrumb.Divider />

      <Breadcrumb.Section active>All Products</Breadcrumb.Section>
    </Breadcrumb>
  );
}
