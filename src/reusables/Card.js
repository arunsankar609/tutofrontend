import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Card = ({ first, last, email }) => {
  const { id } = useParams();
  console.log("params id", id);
  const navigate = useNavigate();
  // useEffect(() => {
  //   deleteUser();
  // }, []);
  const deleteUser = async (id) => {
    const data = await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
    console.log(data);
    window.location.reload();
  };
  // const nextPage = () => {
  //   navigate("/update/" + id);
  // };
  return (
    <div className="border border-green-300 w-72 flex flex-col text-center items-center p-2 m-2">
      <div>First name-{first}</div>
      <div>Last name-{last}</div>
      <div>Email-{email}</div>
      <div className="flex p-2 m-2 ">
        <div>
       <Link to={"/update/"+id}>   <button className="bg-green-400 rounded-sm" >
            Edit
          </button></Link>
        </div>
        <div className="ml-3">
          <button
            className="bg-red-600 text-white rounded-sm"
            onClick={() => {
              deleteUser(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
