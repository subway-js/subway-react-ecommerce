import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export function LoginModal() {
  return (
    <Modal open={false} onClose={() => {}} basic size="small">
      <Header icon="browser" content="Cookies policy" />
      <Modal.Content>
        <h3>This website uses cookies to ensure the best user experience.</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={() => {}} inverted>
          <Icon name="checkmark" /> Got it
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
