import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import UpdateForm from "./components/UpdateForm";
import { store } from "./store/store";
import { Provider } from 'react-redux'
const router=createBrowserRouter([
{
  path:"/",
  element:<Login/>
},
{
  path:"/signup",
  element:<Signup/>
},{
  path:"/home",
  element:<Home/>
},{
  path:"/home/:id",
  element:<Home/>
},{
  path:"/update/:id",
  element:<UpdateForm/>
}
])
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
