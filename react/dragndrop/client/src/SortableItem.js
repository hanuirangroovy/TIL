import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "react-bootstrap/Card";

export function SortableItem(props) {
  // props.id
  // JavaScript

  const { attributes, listners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listners}>
      <Card body className="m-3">
        {props.id}
      </Card>
    </div>
  );
}
