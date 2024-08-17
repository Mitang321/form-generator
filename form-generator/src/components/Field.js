import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { Button } from "react-bootstrap";

const ItemType = "FIELD";

function Field({ field = {}, index, moveField, handleEditClick, deleteField }) {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  if (!field || !field.label) {
    return <div>Invalid field</div>;
  }

  return (
    <div ref={ref} className={`mb-3 ${isDragging ? "opacity-50" : ""}`}>
      <label className="form-label">{field.label}</label>
      {field.type === "text" && (
        <input
          type="text"
          className="form-control"
          placeholder={field.placeholder}
          required={field.required}
        />
      )}
      {field.type === "checkbox" && (
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            required={field.required}
          />
          <label className="form-check-label">{field.label}</label>
        </div>
      )}
      {field.type === "dropdown" && (
        <select className="form-select" required={field.required}>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      )}
      <div className="mt-2">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => handleEditClick(field)}
        >
          Edit
        </Button>{" "}
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => deleteField(index)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Field;
