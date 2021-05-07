import React, { useState } from "react";

const Form = () => {
  const [dogs, setDogs] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false)
  const [update, setUpdate] = useState(dogs)

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

  const inputBaby =(e)=> {
      setUpdate(e.target.value)
  }

  const updateHandler = (e) => { 
    e.preventDefault();
    setDogs(
      dogs.map((item) => {
        if (item.id === dogs[0]) {
          return {
            ...item,
            dogsName: update,
          };
        }
        return item;
      })
    );
    setEdit(false);
  };



  return (
      <>
      {edit ? (
          <form onSubmit={updateHandler}>
              <input type="text" onChange={inputBaby} value={update}/>
              <button type="submit">edit</button>
          </form>
      ) : (<div className="form__container">
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
                <button onClick={() => setEdit(true)}>edit</button>
              </li>
        ))}
        </ul>
      </div>
      </div>
    </div>)}
    
    </>
  );
};

export default Form;
