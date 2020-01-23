import React, { Component } from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
import { useObserveAggregateState } from "../../../../subwayUtils";
import { hideLoginScreen } from "../../commandCreators";

export function LoginModal() {
  const [isLoginModalVisible] = useObserveAggregateState(
    "SessionAggregate",
    aggregateState => aggregateState.loginModalVisible
  );

  return (
    <Modal
      open={isLoginModalVisible}
      dimmer="blurring"
      size="mini"
      onClose={() => hideLoginScreen()}
      size="small"
    >
      <Header color="teal" icon="user" content="Enter your credentials" />
      <Modal.Content>
        <Form>
          <Form.Field>
            <Form.Input disabled value="testuser" label="Enter Username" />
          </Form.Field>
          <Form.Field>
            <Form.Input
              disabled
              value="password"
              label="Enter Password"
              type="password"
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={() => hideLoginScreen()}>
          <Icon name="cancel" /> Cancel
        </Button>

        <Button color="teal" onClick={() => {}}>
          <Icon name="checkmark" /> Login
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
