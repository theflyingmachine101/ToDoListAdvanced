import React from "react";

function InputArea(props) {
  const [item, Setitem] = React.useState("");

  function HandleTextChange(event) {
    const value = event.target.value;
    Setitem(value);
  }

  return (
    <div className="form">
      <input type="text" onChange={HandleTextChange} value={item} />
      <button
        onClick={() => {
          props.AddItem(item);
          Setitem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
