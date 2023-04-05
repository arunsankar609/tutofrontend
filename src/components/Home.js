import React from "react";
import Card from "../reusables/Card";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { datazxc } from "../datacalls/data";
import Payment from "./Payment"
import TodoLists from "../reusables/TodoLists";
import NameViewer from "./NameViewer";
const LOCAL_STORAGE_KEY = "todoApp.todos";
const Home = () => {
  const newId = uuidv4();
  const navigate = useNavigate();

  const [todo, SetTodo] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });
  const [data, setData] = useState([]);
  const [todoVal, setTodoVal] = useState("");
  const [apiData,setApiData]=useState([])
  useEffect(() => {
    getUserData();
    dataapiUser()
  }, []);
  const dataapiUser=async()=>{
await axios.get("https://retoolapi.dev/4zh7Gw/data").then((response)=>{
  console.log("api responseeeee",response);
  setApiData(response.data)
}).then((err)=>console.log(err))
  }
  const getUserData = async () => {
    const users = await axios.get("http://localhost:8080/api/v1/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log("call veranilla", users);
    setData(users.data.data);
    console.log("ethaneee data", data);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  useEffect(() => {
    const StoredTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (StoredTodos) SetTodo(StoredTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);
  const addToddoHandler = () => {
    if (todoVal === " ") return;

    SetTodo((prev) => {
      return [...prev, { id: newId, task: todoVal, completed: false }];
    });
    setTodoVal(" ");
  };

  const handleCompleted = (iEd) => {
    const newTodos=[...todo]
    console.log("new todos",newTodos);
    const deleteId = newTodos.find((delID) => (delID.id === iEd));
    deleteId.completed=!deleteId.completed
    console.log("deleted",deleteId);
    SetTodo(newTodos)
    // SetTodo(deleteId.completed=!deleteId.completed);
  //   SetTodo(prevState => ({
  //     ...prevState,
  //     completed=!deleteId.completed,
  // }))
  };
  // handleCompleted()
  const handleClearTodo=()=>{
const currentTodos=[...todo]
const clearTodo=currentTodos.filter((item)=>item.completed===false)
SetTodo(clearTodo)
  }
  return (
    <div>
      <div className="p-2 m-2 text-end">
        <button
          className="bg-green-700 text-white rounded-xl"
          onClick={handleLogout}
        >
          <span className="p-1 m-1">Logout</span>
        </button>
      </div>
      <div className="p-2 m-2 flex flex-wrap ">
        {data?.map((item) => (
          <Link to={"/home/" + item._id} key={item._id}>
            <Card
              first={item.firstName}
              last={item.lastName}
              email={item.email}
              id={item._id}
            />
          </Link>
        ))}
      </div>
      <div>
        <h1 className="p-2 m-2 text-3xl font-bold">Todo List</h1>
        <div className="p-2 m-2">
          <input
            placeholder="Enter your todos"
            className="border border-cyan-500"
            value={todoVal}
            onChange={(e) => setTodoVal(e.target.value)}
          />
          <button
            className="ml-5 bg-green-600 text-yellow-50"
            onClick={addToddoHandler}
          >
            Add Todos
          </button>
          <button className="ml-5 bg-green-600 text-yellow-50 active:bg-violet-700 focus:outline-none focus:bg-violet-700" onClick={handleClearTodo}>
            Clear Completed
          </button>
        </div>
        <div className="p-2 m-2">
          <TodoLists tasks={todo} handleCompleted={handleCompleted} />
        </div>
      </div>
      <div className="p-2 m-2 ">
      <NameViewer data={apiData}/>
      </div>
    
    </div>
  );
};

export default Home;
