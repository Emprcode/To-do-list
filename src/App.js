import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const handleOnSubmit = (e) => {};
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <h2>NOT-TO-DO-LIST</h2>
          </div>
        </div>

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

        <div className="row mt-5 g-2">
          <div className="col-md">
            <h2 className="text-center">Entry List</h2>
            <hr />
            <table className="table table-striped table-hover">
              <tbody id="task-list"></tbody>
            </table>
          </div>
          <div className="col-md">
            <h2 className="text-center">Bad List</h2>
            <hr />
            <table className="table table-striped table-hover">
              <tbody id="bad-task"></tbody>
            </table>
            <div className="text-end fw-bold">
              You could have saved = <span id="totalBadHr">0</span> Hours{" "}
            </div>
          </div>
        </div>

        <div className="row fw-bold">
          <div className="col">
            The total time allocated = <span id="totalHours">0</span> Hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
