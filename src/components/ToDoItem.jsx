import React from "react";

function ToDoItem(props) {
  return <li onClick={() => props.remove(props.id)}>{props.item}</li>;
}

export default ToDoItem;
