import React, { useState, useEffect } from 'react';
import isOdd from 'is-odd';
import {
  Card,
  CardBody
} from 'reactstrap';

function Output(props) {
  const [raw, setRaw] = useState();
  const [transformed, setTransformed] = useState(false);

  useEffect(() => {
    setRaw(props.rawData);
    try {
      setTransformed(isOdd(props.rawData))
    } catch (error) {
      setTransformed(`${error}`);
    }
  }, [props.rawData])

  return (
    <>
      <Card className="p-4">
        <h3>Raw Data</h3>
        <CardBody>
          {raw ? raw : ''}
        </CardBody>
      </Card>
      <Card className="p-4">
        <h3>Transformed Data</h3>
        <CardBody>
          {raw ? JSON.stringify(transformed) : ''}
        </CardBody>
      </Card>
    </>
  );
}

export default Output;