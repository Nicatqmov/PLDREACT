import React, { useState } from 'react';
import UserCard from './UserCard';
import FilterSort from './FilterSort';

const UserList = ({ users, removeUser, updateUser }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  React.useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div>
      <h1>User List</h1>
      <FilterSort users={users} setFilteredUsers={setFilteredUsers} />
      <div style={styles.container}>
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              onRemove={() => removeUser(index)}
              onUpdate={(updatedUser) => updateUser(index, updatedUser)}
            />
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default UserList;
