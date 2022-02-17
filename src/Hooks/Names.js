import React, { useState } from "react";

function Names() {
  const [Name, setName] = useState("");
  const [Names, setNames] = useState([]);

  function AddName(e) {
    e.preventDefault();
    setNames([...Names, { id: Names.length, Name }]);
  }
  console.log(Names);

  return (
    <div>
      <form onSubmit={AddName}>
        <input
          type="text"
          value={Name}
          placeholder="add name"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {Names.map((list) => (
        <ul className="list-unstyled text-decoration-none">
          <li className="list-unstyled" key={list.id}>
            {" "}
            {list.Name}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Names;
