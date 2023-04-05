import axios from "axios";
import { Field, Formik, Form } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UpdateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("update", id);
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
          await axios
            .post("http://localhost:8080/api/v1/users/update/" + id, values)
            .then((response) => {
              console.log("response aane",response);
              if(response.status===200){
                navigate('/home')
              }
            });
          console.log("verana valuess", values);

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
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateForm;
