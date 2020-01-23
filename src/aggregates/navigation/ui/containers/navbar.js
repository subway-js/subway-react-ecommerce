import React from "react";
import { Container, Menu, Header, Dropdown, Button } from "semantic-ui-react";
import { useObserveAggregateState } from "../../../../subwayUtils";
import { showLoginScreen } from "../../commandCreators";
export function Navbar({ shoppingCartMenuItem }) {
  const [isUserLogged] = useObserveAggregateState(
    "SessionAggregate",
    aggregateState => aggregateState.userLogged
  );

  return (
    <Menu size="small" borderless fixed="top">
      <Container>
        <Menu.Item>
          <Header color="teal">SubwayJS eComm</Header>
        </Menu.Item>

        <Menu.Item position="right">
          {shoppingCartMenuItem}
          {!isUserLogged && (
            <Button
              onClick={() => showLoginScreen()}
              style={{ marginLeft: 10 }}
              color="teal"
              basic
            >
              {" "}
              Log-in
            </Button>
          )}
          {isUserLogged && (
            <Dropdown item icon="teal user">
              <Dropdown.Menu>
                <Dropdown.Header content="Hi, user!" />
                <Dropdown.Divider />
                <Dropdown.Item icon="edit" text="Account details" />
                <Dropdown.Item icon="edit" text="History" />
                <Dropdown.Item icon="edit" text="Logout" />
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Container>
    </Menu>
  );
}
