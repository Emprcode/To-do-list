import React from "react";

export const Form = () => {
  const handleOnSubmit = (e) => {};
  return <div>
    <form onSubmit={handleOnSubmit}>
          <div className="row mt-3 g-2">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                name="task"
                required
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
              />
            </div>
            <div className=" col-md-2 d-grid gap-2">
              <button className="btn btn-primary">
                <i className="fa-solid fa-plus"></i>Add New Task
              </button>
            </div>
          </div>
        </form>
  </div>;
};
