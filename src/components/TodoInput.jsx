import React, { useState } from 'react'

function TodoInput(props) {
  const { addHandler } = props
  const [inputValue, setInputValue] = useState('');

  
  return (
    <div className="input-container">
      <input placeholder="Add Task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => {
        if (!inputValue) { return }
        addHandler(inputValue)
         setInputValue('')
      }}>
        <i class="ri-add-fill"></i>
      </button>
    </div>
  );
}

export default TodoInput