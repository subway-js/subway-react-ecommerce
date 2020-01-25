import React from "react";
import {
  Container,
  Menu,
  Header,
  Dropdown,
  Button,
  Popup,
  List,
  Icon,
  Divider
} from "semantic-ui-react";
import { useObserveAggregateState } from "../../../../subwayUtils";
import { showLoginScreen, logout } from "../../commandCreators";

export function Navbar({ shoppingCartMenuItem }) {
  const [sessionData] = useObserveAggregateState(
    "SessionAggregate",
    aggregateState => ({
      isUserLogged: aggregateState.userLogged,
      username: aggregateState.username
    })
  );

  return (
    <Menu size="small" borderless fixed="top">
      <Container>
        <Menu.Item>
          <Header color="teal">SubwayJS eComm</Header>
        </Menu.Item>

        <Menu.Item position="right">
          {shoppingCartMenuItem}
          {sessionData && !sessionData.isUserLogged && (
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
          {sessionData && sessionData.isUserLogged && (
            <Popup
              on="click"
              position="bottom right"
              trigger={
                <Button basic color="teal" icon style={{ marginLeft: 10 }}>
                  <Icon name="user" />
                </Button>
              }
            >
              <Popup.Content style={{ padding: "0 !important" }}>
                <List.Header>{`Hi, ${sessionData.username}`} </List.Header>
                <Divider />
                <List selection verticalAlign="middle">
                  <List.Item onClick={() => logout()}>Logout</List.Item>
                </List>
              </Popup.Content>
            </Popup>

            // <Dropdown item icon="teal user">
            //   <Dropdown.Menu>
            //     <Dropdown.Header content={`Hi, ${sessionData.username}`} />
            //     <Dropdown.Divider />
            //     <Dropdown.Item icon="edit" text="Account details" />
            //     <Dropdown.Item icon="edit" text="History" />
            //     <Dropdown.Item icon="edit" text="Logout" />
            //   </Dropdown.Menu>
            // </Dropdown>
          )}
        </Menu.Item>
      </Container>
    </Menu>
  );
}
