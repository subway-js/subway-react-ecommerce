import React, { useState } from "react";
import {
  Grid,
  Image,
  Label,
  Icon,
  Card,
  Rating,
  Button,
  Dimmer
} from "semantic-ui-react";

import { AddToCartButton } from "../../../shoppingCart";

const sampleData = [
  {
    id: 1,
    img:
      "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/11.jpg",
    title: "GoPro HERO7 Camera",
    price: "299.00",
    ccy: "$",
    rating: "4",
    reviewsCount: 132
  },
  {
    id: 2,
    img:
      "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg",
    title: "Leather Sleeve - Macbook 13’’",
    price: "3753.00",
    newPrice: "3099.00",
    ccy: "$",
    rating: "4",
    reviewsCount: 56
  },
  {
    id: 3,
    img:
      "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/4.jpg",
    title: "Fjällräven Kånken Backpack Blue Ridge",
    price: "84.00",
    ccy: "$",
    rating: "5",
    reviewsCount: 85
  },
  {
    id: 4,
    img:
      "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/12.jpg",
    title: "Off-White Odsy-1000 Low-Top Sneakers",
    price: "815.00",
    newPrice: "799.00",
    ccy: "$",
    rating: "4",
    reviewsCount: 422
  },
  {
    id: 5,
    img:
      "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/9.jpg",
    title: "Logitech - Headset for gaming",
    price: "19.00",
    newPrice: "14.99",
    ccy: "$",
    rating: "3",
    reviewsCount: 23
  },
  {
    id: 6,
    img:
      "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/10.jpg",
    title: "Apple Homkit - Ecobee3 Lite Smart Thermostat",
    price: "169.95",
    ccy: "$",
    rating: "4",
    reviewsCount: 198
  }
];
export function ProductList() {
  const [productList, setProductList] = useState(sampleData);
  const [detailsButtonHoveredId, setDetailsButtonHoveredId] = useState(null);
  // console.log(productList);

  return (
    <Grid columns={3}>
      {productList &&
        productList.map(
          ({
            id,
            img,
            title,
            price,
            rating,
            reviewsCount,
            showDetailsButton = false,
            newPrice = null,
            ccy
          }) => (
            <Grid.Column key={id}>
              <Card>
                {newPrice && (
                  <Image
                    fluid
                    label={{
                      as: "a",
                      color: "orange",
                      corner: "left",
                      icon: "star"
                    }}
                  />
                )}
                <Dimmer.Dimmable
                  as={Image}
                  onMouseOver={() => {
                    setDetailsButtonHoveredId(id);
                  }}
                  onMouseLeave={() => {
                    setDetailsButtonHoveredId(null);
                  }}
                  dimmed={detailsButtonHoveredId === id}
                >
                  <Image src={img} wrapped />

                  <Dimmer active={detailsButtonHoveredId === id}>
                    <Button basic size="small" color="teal">
                      <Button.Content>
                        <Icon name="magnify" /> Product details
                      </Button.Content>
                    </Button>
                  </Dimmer>
                </Dimmer.Dimmable>
                <Card.Content>
                  <Card.Header as="a">{title}</Card.Header>
                  <Card.Meta>
                    <Rating
                      size="mini"
                      disabled
                      icon="star"
                      defaultRating={rating}
                      maxRating={5}
                    />{" "}
                    {reviewsCount} Reviews
                  </Card.Meta>
                  {newPrice && (
                    <>
                      <Card.Description>
                        <strike>
                          {ccy}
                          {price}
                        </strike>{" "}
                        <Icon name="arrow right" />{" "}
                        <Label as="span" color="orange" tag>
                          {ccy}
                          {newPrice}
                        </Label>
                      </Card.Description>
                    </>
                  )}
                  {!newPrice && (
                    <Card.Description>
                      {ccy}
                      {price}{" "}
                    </Card.Description>
                  )}
                </Card.Content>
                <Card.Content extra>
                  <AddToCartButton size="small" />
                  {
                    // <Button size="small" fluid color="teal">
                    //   <Button.Content>
                    //     <Icon name="shop" /> Add to cart
                    //   </Button.Content>
                    // </Button>
                  }
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        )}
    </Grid>
  );
}
