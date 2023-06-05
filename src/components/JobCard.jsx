import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function JobCard({ job }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{job.name}</Card.Title>
          <Card.Text>{job.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{job.sector}</ListGroup.Item>
          <ListGroup.Item>ID: {job.id}</ListGroup.Item>
          <ListGroup.Item>
            Apply before: <strong>{job.lastDateToApply}</strong>
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <Button>Apply</Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default JobCard;
