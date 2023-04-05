import React from "react";

const TodoLists = ({ tasks, handleCompleted }) => {
  return (
    <div>
      {tasks.map((x) => (
        <div key={x.id}>
          <div>
            {x.task}{" "}
            <input
              type="checkbox"
              checked={x.completed}
              onClick={()=>handleCompleted(x.id)}
            />
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
