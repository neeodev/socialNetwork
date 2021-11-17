import React from 'react';
import './sass/App.scss';
import { Container, Row, Col } from './plugins/grid/components/Grid';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col size={[{size: 'sm', col: 12}, {size: 'md', col: 6}, {size: 'lg', col: 4}]}>

          </Col>
          <Col size={[{size: 'sm', col: 12}, {size: 'md', col: 6}, {size: 'lg', col: 4}]}>

          </Col>
          <Col size={[{size: 'sm', col: 12}, {size: 'md', col: 6}, {size: 'lg', col: 4}]}>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
