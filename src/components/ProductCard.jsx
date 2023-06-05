import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function ProductCard({ item }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card
        className="w-100 d-flex justify-content-center"
        style={{ width: "18rem" }}
      >
        <Card.Img
          className="align-self-center"
          variant="top"
          src={item.image}
          style={{ width: "50%" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <div className="mt-auto">
            <Button variant="info text-white" onClick={handleOpenModal}>
              Show Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.description}</Modal.Body>
        <Modal.Body>
          <strong>{item.price}$</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductCard;
