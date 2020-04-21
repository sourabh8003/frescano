import React from 'react';
import { Row } from 'react-bootstrap';

import './styles/style.scss';
import Login from './components/login/Login';

const App = () => {
  return (
    <div className="container">
      <Row className="content-wrapper">
        <Login />
      </Row>
    </div>
  );
}

export default App;
