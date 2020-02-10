import React, { useEffect, useContext, useState } from "react";
import Context from "../../state/context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PlayerIdentifier from "../../components/PlayerIdentifier/PlayerIdentifier";
import WinCount from "../../components/WinCount/WinCount";
import WinningAttribute from "../../components/WinningAttribute/WinningAttribute";
import TopTrump from "../TopTrump/TopTrump";

const PlayerCard = ({ id = null }) => {
  const { state } = useContext(Context);
  const [winCount, setWinCount] = useState(0);
  const [winningAttribute, setWinningAttribute] = useState("");
  const index = [...state.players].findIndex(player => player.id === id);

  let playerWinCount = state.players[index].winCount;
  let playerWinningAttribute = state.players[index].attribute;

  useEffect(() => {
    setWinCount(playerWinCount);
  }, [playerWinCount]);

  useEffect(() => {
    setWinningAttribute(playerWinningAttribute);
  }, [playerWinningAttribute]);

  return (
    <Card>
      <Card.Header>
        <Container>
          <Row>
            <Col md={4}>
              <PlayerIdentifier id={id} />
            </Col>
            <Col md={{ span: 3, offset: 5 }}>
              <WinCount count={winCount} />
            </Col>
          </Row>
          <Row>
            <Col>
              <WinningAttribute attribute={winningAttribute} />
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body>
        <TopTrump id={id} />
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
