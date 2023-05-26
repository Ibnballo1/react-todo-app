import React, { useState } from 'react';
import styles from './TodoItem.module.css';

// Function Component Version
const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const [state, setState] = useState({
    editing: false,
  });

  const { id, title, completed } = props.todo;
  const handleEditing = () => {
    setState({
      editing: true,
    })
  };

  let viewMode = {}
  let editMode = {}
  
  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setState({ editing: false })
    }
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          className={styles.checkbox}
          onChange={() => props.handleChangeProps(id)}
        />
        <button
          type="button"
          onClick={() => props.handleDeleteProps(id)}
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        value={title}
        style={editMode}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem;
