// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Forms from "./Components/Forms";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Lists from "./Components/Lists";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  createStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };

  render() {
    console.log(this.state.students);
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <Forms createStudent={this.createStudent} />
          </Col>
          <Col xs={12} md={6}>
            <Lists students={this.state.students} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
