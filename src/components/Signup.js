import React from "react";
import axios from "axios";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
const Signup = () => {
 const navigate=useNavigate()
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          console.log('verana valuess',values);
         await axios.post("http://localhost:8080/api/v1/users/",values)
            .then(function (response) {
              console.log(response.status);
              if(response.status===200){
                navigate('/')
               
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <Field
            className="border border-black mx-3"
            id="firstName"
            name="firstName"
            placeholder="Jane"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

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
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
