import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const CreatePost = () => {
  const url = "http://localhost:3333/";
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };
  const onSubmit = async (data) => {
    const res = await axios.post(`${url}posts/`, data);
    console.log("res", res);
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  return (
    <>
      <div className="createPostPage">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Title:</label>
            <ErrorMessage name="title" component="span" />
            <Field
              id="inputCreatePost"
              name="title"
              placeholder="Ex.... title"
              autoComplete="off"
            />

            <label>Text:</label>
            <ErrorMessage name="postText" component="span" />
            <Field
              id="inputCreatePost"
              name="postText"
              placeholder="What are you thinking?..."
              autoComplete="off"
            />

            <label>Username:</label>
            <ErrorMessage name="username" component="span" />
            <Field
              id="inputCreatePost"
              name="username"
              placeholder="@"
              autoComplete="off"
            />

            <button type="submit">Create a post!</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
