import React, { useState } from "react";

export default function SearchBar(props) {
  const [val, setVal] = useState("");

  const onInputChange = (event) => {
    setVal(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.userSubmit(val);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="flexContainer">
        <label>
          <h2>Image Search: </h2>
        </label>
        <input
          className="inputStyle"
          type="text"
          value={val}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}
