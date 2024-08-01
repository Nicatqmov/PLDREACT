import React, { useState } from 'react';

const UserCard = ({ user, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [age, setAge] = useState(user.age || '');

  const handleSave = () => {
    onUpdate({ name, email, age });
    setIsEditing(false);
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
          <button style={styles.button} onClick={handleSave}>
            Save
          </button>
          <button style={styles.button} onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2>{user.name || 'Name not available'}</h2>
          <p>
            <strong>Email:</strong> {user.email || 'Email not available'}
          </p>
          <p>
            <strong>Age:</strong> {user.age || 'Age not available'}
          </p>
          <button style={styles.button} onClick={() => setIsEditing(true)}>
            Edit User
          </button>
          <button style={styles.button} onClick={onRemove}>
            Delete User
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'center',
  },
  button: {
    marginTop: '10px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    marginRight: '5px',
  },
};

export default UserCard;
