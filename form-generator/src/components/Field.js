import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

function Field({ field, index, onEdit, onDelete }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.FIELD,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.FIELD,
    hover: (item) => {
      if (item.index !== index) {
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`field-item mb-2 ${isDragging ? "dragging" : ""}`}
    >
      <span>{field.label}</span>
      <button className="btn btn-sm btn-secondary ml-2" onClick={onEdit}>
        Edit
      </button>
      <button className="btn btn-sm btn-danger ml-2" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Field;
