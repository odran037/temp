import React from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
} from 'reactstrap';

function UserInput(props) {
  return (
    <Card className="p-4">
      <h3>User Input</h3>
      <CardBody>
        <Form>
          <FormGroup>

            <InputGroup>
              <Input
                type="text"
                value={props.inputValue || ''}
                onChange={(e) => props.setInputValue(e.target.value)}
              />
              <InputGroupAddon addonType="append">
                <Button
                  color="warning"
                  onClick={() => props.clearValue()}
                >
                  Clear
                </Button>
              </InputGroupAddon>
            </InputGroup>

            <Button
              block
              size="lg"
              color="success"
              className="mt-5"
              onClick={() => props.sendValue()}
            >
              {props.sendButton}
            </Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default UserInput;