import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../todoAtoms";

function TodoItemCreator() {
  const [inputvalue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputvalue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputvalue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 교유한 id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
