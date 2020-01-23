import React, { Component, useState } from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
import { useObserveAggregateState } from "../../../../subwayUtils";
import {
  hideLoginScreen,
  simulateSuccessfulLogin
} from "../../commandCreators";

export function LoginModal() {
  const [authInProgress, setAuthInProgress] = useState(false);
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
        <Button
          disabled={authInProgress}
          color="grey"
          onClick={() => hideLoginScreen()}
        >
          <Icon name="cancel" /> Cancel
        </Button>

        <Button
          loading={authInProgress}
          disabled={authInProgress}
          color="teal"
          onClick={() => {
            setAuthInProgress(true);
            simulateSuccessfulLogin("MichaelJordan23", "aPassword");
          }}
        >
          <Icon name="checkmark" /> Simulate Successful Login
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
