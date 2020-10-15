import React, {useState} from 'react';
import UserInput from './UserInput';
import Output from './Output';
import {
  Container,
  Col,
  Jumbotron,
  Row
} from 'reactstrap';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [sendButton, setSendButton] = useState('Send');

  const clearValue = () => {
    setInputValue(0);
    setUserInput(0);
  }

  async function sendValue() {
    const promise = (ms) => new Promise(resolve => setTimeout(resolve, 1500));

    setUserInput(0)
    setSendButton('Sending');

    promise().then(() => {
      setUserInput(inputValue);
    }).catch(() => {
      alert('There was an error. Please try again')
    }).finally(() => {
      setSendButton('Send');
    });
  }

  return (
    <Container>
      <Jumbotron>
        <h1 className="text-center">Star2Star</h1>
      </Jumbotron>
      <Row>
        <Col>
          <UserInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            clearValue={clearValue}
            sendValue={sendValue}
            sendButton={sendButton}
          />
        </Col>
        <Col>
          <Output rawData={userInput} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
