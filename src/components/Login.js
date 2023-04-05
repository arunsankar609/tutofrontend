import React from "react";
import { Formik, Field, Form } from "formik";
import { Link ,useNavigate} from "react-router-dom";

import axios from "axios";
const Login = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          Password: "",
        }}
        onSubmit={async (values) => {
          await axios
            .post("http://localhost:8080/api/v1/users/login", values)
            .then((response) => {
              console.log("loginResponse", response);
              if(response.status===200){
                localStorage.setItem("token",response.data.token)
                navigate('/home')
               
              }

            })
            .catch((error) => {
              console.log(error.message);
            });
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col">
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="email">Password</label>
          <Field
            id="Password"
            name="Password"
            placeholder="Enter your password"
            type="Password"
          />
          <button type="submit">Submit</button>
          <div className="text-center ">
            <Link to={"/signup"}>
              <h1>
                <span className=" bg-slate-400 w-36 rounded-2xl">
                  If not a user please Signup
                </span>
              </h1>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
