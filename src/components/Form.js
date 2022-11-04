import React, { useState } from "react";
import { randomString } from "../Utility";

export const Form = ({ addTask }) => {
  const [form, setForm] = useState({ type: "entry" });
  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const _id = randomString();

    addTask({ ...form, _id });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="row mt-3 g-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="task"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="Time taken"
              name="hr"
              min="1"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className=" col-md-2 d-grid gap-2">
            <button className="btn btn-primary" type="submit" >
              <i className="fa-solid fa-plus"></i>Add New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
