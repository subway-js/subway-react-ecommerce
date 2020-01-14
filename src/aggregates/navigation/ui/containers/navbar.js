import React from "react";
import { Container, Menu, Header } from "semantic-ui-react";

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
        <Menu.Item>
          <Header as="h2" color="teal">
            SubwayJS eComm
          </Header>
        </Menu.Item>

        <Menu.Item position="right">
          {shoppingCartMenuItem}
          {/*<Button style={{ marginLeft: "0.5em" }}>Login</Button>*/}
        </Menu.Item>
      </Container>
    </Menu>
  );
}
