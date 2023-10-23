import React, { useState } from "react";
import UserInfo from "./Components/UserInfo";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "kareem", age: 22, phone: 212121 },
    { id: 1, name: "kk", age: 33, phone: 212121 },
  ]);

  // handler to set state
  const saveHandler = () => {
    //x1
    setUsers([...users, { id: 4, name: "sera", age: 30 }]);
  };

  //delete callback
  const deleteHandler = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // loop for component
  const userList = users.map((user) => (
    <UserInfo
      id={user.id}
      name={user.name}
      age={user.age}
      key={user.id}
      delete={deleteHandler}
    />
  ));

  return (
    <div>
      <button type="button" onClick={saveHandler}>
        Insert
      </button>
      {userList}
    </div>
  );
};

export default App;