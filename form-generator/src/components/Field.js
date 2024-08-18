import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Button, Card } from "react-bootstrap";

function Field({ field, onEdit, onDelete }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.FIELD,
    item: { field },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.FIELD,
    hover: (item) => {},
  });

  return (
    <Card
      ref={(node) => drag(drop(node))}
      className={`mb-2 ${isDragging ? "bg-light" : "bg-white"}`}
    >
      <Card.Body className="d-flex justify-content-between align-items-center">
        <span>{field.label}</span>
        <div>
          <Button
            variant="secondary"
            size="sm"
            onClick={onEdit}
            className="me-2"
          >
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Field;
