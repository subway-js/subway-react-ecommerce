import React from "react";
import { Container, Button, Menu, Icon } from "semantic-ui-react";

export function Navbar({ shoppingCartMenuItem }) {
  return (
    <Menu
      pointing
      secondary
      color="teal"
      fixed="top"
      style={{ background: "white" }}
    >
      <Container>
        <Menu.Item active>Home</Menu.Item>

        <Menu.Item position="right">
          {shoppingCartMenuItem}
          {/*<Button style={{ marginLeft: "0.5em" }}>Login</Button>*/}
        </Menu.Item>
      </Container>
    </Menu>
  );
}
