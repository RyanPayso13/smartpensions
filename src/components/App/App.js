import React, { useReducer } from "react";
import Context from "../../state/context";
import Container from "react-bootstrap/Container";
import { gameReducer, initialState } from "../../state/reducers/gameReducer";
import Row from "react-bootstrap/Row";
import ResourceSelect from "../ResourceSelect/ResourceSelect";
import { Navbar, Col } from "react-bootstrap";
import Player from "../../containers/Player/Player";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container>
        <Row>
          <Col>
            <Navbar bg="light">
              <Navbar.Brand>Star Wars API Test</Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <ResourceSelect />
          </Col>
        </Row>
        <Row>
          {state.players &&
            state.players.length > 0 &&
            state.players.map(player => {
              return (
                <Col key={player.id}>
                  <Player id={player.id} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Context.Provider>
  );
}

export default App;
