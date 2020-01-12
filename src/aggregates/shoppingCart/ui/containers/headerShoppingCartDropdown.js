import React from "react";
import {
  Button,
  Popup,
  Header,
  Icon,
  Segment,
  Item,
  Label
} from "semantic-ui-react";

const testItems = [
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
    rating: "5",
    ccy: "$",
    reviewsCount: 85
  },
  {
    id: 4,
    img:
      "http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/12.jpg",
    title: "Off-White Odsy-1000 Low-Top Sneakers",
    price: "815.00",
    newPrice: "799.00",
    rating: "4",
    ccy: "$",
    reviewsCount: 422
  }
];

const noItems = [];

export function HeaderShoppingCartDropdown({ size }) {
  // const items = noItems;
  const items = testItems;

  return (
    <Popup
      on="click"
      position="bottom right"
      trigger={
        <Button basic color="teal" style={{ marginLeft: "0.5em" }}>
          <Icon name="shopping cart" color="teal" />
          {items && items.length > 0 && (
            <Label circular size="tiny" color="teal">
              {items.length}
            </Label>
          )}
        </Button>
      }
    >
      <Popup.Content>
        {(!items || items.length === 0) && (
          <Segment basic textAlign="center">
            <Icon name="frown outline" size="big" color="teal" />
            <Header size="tiny">
              <Header.Subheader>Your shopping cart is empty</Header.Subheader>
            </Header>
          </Segment>
        )}
        {items && items.length > 0 && (
          <Item.Group divided>
            {items.map(({ id, img, title, price, newPrice, ccy }) => (
              <Item key={id}>
                <Item.Image size="mini" src={img} />

                <Item.Content>
                  <Item.Description>{title}</Item.Description>
                  <Item.Meta>
                    <span className="price">
                      {ccy}
                      {newPrice || price}
                    </span>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ))}
            <Item>
              <Item.Header as="h4">
                Total: {items[0].ccy}{" "}
                {items
                  .reduce(
                    (acc, curr) => +acc + +(curr.newPrice || curr.price),
                    0
                  )
                  .toFixed(2)}
              </Item.Header>
            </Item>

            <Item>
              <Item.Content>
                <Button fluid color="teal">
                  Checkout
                </Button>
              </Item.Content>
            </Item>
          </Item.Group>
        )}
      </Popup.Content>
    </Popup>
  );
}
