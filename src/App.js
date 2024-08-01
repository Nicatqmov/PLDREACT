import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Header from './components/Header';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const updateUser = (index, updatedUser) => {
    const newUsers = [...users];
    newUsers[index] = updatedUser;
    setUsers(newUsers);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/form" element={<UserForm addUser={addUser} />} />
          <Route
            path="/list"
            element={
              <UserList users={users} removeUser={removeUser} updateUser={updateUser} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
