import React, { useState } from 'react';

const FilterSort = ({ users, setFilteredUsers }) => {
  const [filterName, setFilterName] = useState('');
  const [sortDirection, setSortDirection] = useState(null); 

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterName(value);

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );

    if (sortDirection) {
      filteredUsers.sort((a, b) =>
        sortDirection === 'asc' ? a.age - b.age : b.age - a.age
      );
    }

    setFilteredUsers(filteredUsers);
  };

  const handleSort = (direction) => {
    setSortDirection(direction);

    const sortedUsers = [...users]
      .filter((user) =>
        user.name.toLowerCase().includes(filterName.toLowerCase())
      )
      .sort((a, b) => (direction === 'asc' ? a.age - b.age : b.age - a.age));

    setFilteredUsers(sortedUsers);
  };

  const handleRemoveFilter = () => {
    setFilterName('');
    setSortDirection(null);
    setFilteredUsers(users);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Filter by name"
        value={filterName}
        onChange={handleFilterChange}
        style={styles.input}
      />
      <button
        onClick={() => handleSort('asc')}
        style={styles.button}
      >
        Sort by Age Ascending
      </button>
      <button
        onClick={() => handleSort('desc')}
        style={styles.button}
      >
        Sort by Age Descending
      </button>
      <button onClick={handleRemoveFilter} style={styles.button}>
        Remove Filter
      </button>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  input: {
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '5px 10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
};

export default FilterSort;
