import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { filteredTodoListState, todoListState } from "./todoAtoms";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";
import { currentUserNameQuery } from "./UserAtoms";
import { Suspense } from "react";

function App() {
  // const todoList = useRecoilValue(todoListState);
  const filterdTodoList = useRecoilValue(filteredTodoListState);
  // console.log(todoList);
  // console.log("filterdTodoList: ", filterdTodoList);

  return (
    <div className="App">
      {/* 비동기 작동을 할 때 되기 전에 어떤걸 보여줄지 */}
      <Suspense fallback={<div>loading...</div>}>
        <CurrentUserInfo />
      </Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filterdTodoList.map((todoItem) => {
        return <TodoItem key={todoItem.id} item={todoItem} />;
      })}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
