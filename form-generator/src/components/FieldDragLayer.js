import React from "react";
import { useDragLayer } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Card } from "react-bootstrap";

const getItemStyles = (currentOffset) => {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffset;
  return {
    transform: `translate(${x}px, ${y}px)`,
    pointerEvents: "none",
  };
};

function FieldDragLayer() {
  const { itemType, isDragging, currentOffset } = useDragLayer((monitor) => ({
    itemType: monitor.getItemType(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || itemType !== ItemTypes.FIELD) {
    return null;
  }

  return (
    <div style={{ position: "fixed", pointerEvents: "none", zIndex: 100 }}>
      <Card style={getItemStyles(currentOffset)}>
        <Card.Body>Dragging...</Card.Body>
      </Card>
    </div>
  );
}

export default FieldDragLayer;
