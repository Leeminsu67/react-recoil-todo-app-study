import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStateState } from "../todoAtoms";

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStateState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li>Total Items: {totalNum}</li>
      <li>Total completed: {totalCompletedNum}</li>
      <li>Total not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}

export default TodoListStats;
