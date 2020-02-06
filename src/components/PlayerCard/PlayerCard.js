import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import TopTrump from "../../containers/TopTrump/TopTrump";

const PlayerCard = ({ id = null, winCount = 0 }) => {
  return (
    <Card>
      <Card.Header>
        <Container>
          <Row>
            <Col md={4}>Player {id}</Col>
            <Col md={{ span: 3, offset: 5 }}>
              <Badge pill variant="success">
                {winCount}
              </Badge>
              &nbsp;wins
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body>
        <TopTrump />
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
