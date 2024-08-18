import React from "react";
import { useDragLayer } from "react-dnd";

function FieldDragLayer() {
  const { isDragging, itemType, item, clientOffset } = useDragLayer(
    (monitor) => ({
      isDragging: monitor.isDragging(),
      itemType: monitor.getItemType(),
      item: monitor.getItem(),
      clientOffset: monitor.getClientOffset(),
    })
  );

  if (!isDragging) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 100,
        left: clientOffset.x,
        top: clientOffset.y,
      }}
    >
      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          border: "1px solid black",
        }}
      >
        {item.label}
      </div>
    </div>
  );
}

export default FieldDragLayer;
