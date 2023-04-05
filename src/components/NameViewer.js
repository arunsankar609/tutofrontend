import React, { useState } from "react";

const NameViewer = ({ data }) => {
  console.log("propzdataa", data.length);
  const [todosPerPage, settodosPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfTotalPages = Math.ceil(data.length / todosPerPage);
  const pages = [...Array(numberOfTotalPages + 1).keys()].slice(1);
  console.log("zczxczx", pages);
  const indexOfLastTodo = currentPage + todosPerPage;
  const indexofFirstTodo = indexOfLastTodo - todosPerPage;
  const visibleTodos = data.slice(indexofFirstTodo, indexOfLastTodo);
  return (
    <div>
      {visibleTodos.map((name) => (
        <div
          key={name.id}
          className="flex justify-center border border-red-800"
        >
          <p className="font-semibold border border-red-800">{name.id}</p>
          <h1 className="font-semibold border border-red-800 ml-2">
            {name.name}
          </h1>
        </div>
      ))}
      <span className="font-bold border border-red-500 " onClick={() => setCurrentPage(currentPage-1)}>Previous</span>
      <p>
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`items-center p-2 m-2 font-bold hover:bg-violet-600  focus:outline-none focus:ring focus:ring-violet-300 ${currentPage===page?"bg-red-600":""} `}
            
            
          >
            {page}
          </span>
        ))}
      </p>
      <span className="font-bold border border-red-500" onClick={() => setCurrentPage(currentPage+1)}>Next</span>
    </div>
  );
};

export default NameViewer;
