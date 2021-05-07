import React, { useState } from "react";

const Form = () => {
  const [dogs, setDogs] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDogs([...dogs, { id: Math.random() * 1000, dogsName: input }]);
    setInput("");
  };

  const handleDelete = (id) => {
    console.log(dogs);
    setDogs(dogs.filter(e => e.id !== id));
  };

  return (
    <div className="form__container">
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={input} />
          <button type="submit">catch the dog</button>
        </form>
          <div>
            <ul>
        {dogs.map((e) => (
              <li key={e.id}>
                {e.dogsName}
                <button onClick={()=> handleDelete(e.id)}>delete</button>
              </li>
        ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Form;
