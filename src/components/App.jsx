import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
function App() {
  const [tditem, Settditem] = React.useState([]);
  function AddItem(item) {
    Settditem(prevValue => {
      return [...prevValue, item];
    });
  }

  function DeleteItem(id) {
    Settditem(prevItems => {
      return prevItems.filter((name, ind) => {
        return id !== ind;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea AddItem={AddItem} />
      <div>
        <ul>
          {tditem.map((itemName, index) => (
            <ToDoItem remove={DeleteItem} id={index} item={itemName} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
