import React, { useState } from "react";
import {
  Segment,
  Image,
  Header,
  Container,
  Rating,
  Divider,
  Icon,
  Label
} from "semantic-ui-react";

import { AddToCartButton } from "../components/addToCartButton";

const sampleProduct = {
  id: 4,
  img:
    "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/12.jpg",
  title: "Off-White Odsy-1000 Low-Top Sneakers",
  price: "815.00",
  newPrice: "799.00",
  ccy: "$",
  rating: "4",
  reviewsCount: 422
};
export function ProductDetails() {
  return (
    <Segment.Group horizontal>
      <Segment>
        <Image src={sampleProduct.img} wrapped />

        <Segment.Group horizontal compact>
          {[1, 2, 3].map(i => (
            <Segment key={i} basic>
              <Image src={sampleProduct.img} size="tiny" />
            </Segment>
          ))}
        </Segment.Group>
      </Segment>
      <Segment>
        <Header size="huge">
          {sampleProduct.title}{" "}
          {sampleProduct.newPrice && (
            <Label as="span" color="orange" tag>
              ON SALE
            </Label>
          )}
        </Header>
        <Container>
          <Rating
            disabled
            icon="star"
            defaultRating={sampleProduct.rating}
            maxRating={5}
          />{" "}
          {sampleProduct.reviewsCount} Reviews
        </Container>
        <br />
        <Container>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Container>

        <br />

        {sampleProduct.newPrice && (
          <>
            <Label as="span" color="grey" basic size="huge">
              <strike>
                {sampleProduct.ccy}
                {sampleProduct.price}
              </strike>
            </Label>
            <Icon name="arrow right" size="big" />
            <Label as="span" color="orange" size="huge">
              {sampleProduct.ccy}
              {sampleProduct.newPrice}
            </Label>
          </>
        )}
        {!sampleProduct.newPrice && (
          <Header size="huge">
            {sampleProduct.ccy}
            {sampleProduct.price}
          </Header>
        )}

        <Divider />
        <AddToCartButton size="huge" />
        {
          // <Button size="huge" fluid color="teal">
          //   <Button.Content>
          //     <Icon name="shop" /> Add to cart
          //   </Button.Content>
          // </Button>
        }
      </Segment>
    </Segment.Group>
  );
}
