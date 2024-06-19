import { useState } from "react";
import css from "./User.module.css";

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
  ]);
  const [newUserName, setNewUserName] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    if (newUserName.trim() && password.trim()) {
      const newUser = {
        id: users.length + 1,
        name: newUserName.trim(),
      };
      setUsers([...users, newUser]);
      setNewUserName("");
      setPassword("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addUser();
    }
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleChangeName = (e) => {
    setNewUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={css.userList}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          value={newUserName}
          onChange={handleChangeName}
          onKeyDown={handleKeyPress}
          placeholder="Enter a new user name"
        />
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Enter password"
        />
        <button
          onClick={addUser}
          disabled={!newUserName.trim() || !password.trim()}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default User;
