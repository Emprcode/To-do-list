import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { useEffect, useState } from "react";
import {
  deleteTasks,
  fetchAllTask,
  postTask,
  updateTask,
} from "./helpers.js/axiosHelpers";

const hourPerWeek = 7 * 24;

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [itemToDel, setItemToDel] = useState([]);
  const [response, setResponse] = useState({});
  const [checkedAll, setCheckedAll] = useState(false);

  const totalHours = taskList.reduce((subTtl, item) => subTtl + +item.hr, 0);

  useEffect(() => {
    getTasks();
  }, []);
  // call axios to fetch all data

  const getTasks = async () => {
    const { status, tasks } = await fetchAllTask();
    status === "success" && setTaskList(tasks);
    // console.log(data);
  };

  const addTask = async (data) => {
    if (hourPerWeek < totalHours + +data.hr) {
      return alert("Hey, you dont have enough time");
    }
    // setTaskList([...taskList, data]);

    // send data to the api

    const result = await postTask(data);
    console.log(result);
    result?.status === "success" && getTasks();
    setResponse(result);
  };
  const switchTask = async (_id, type) => {
    // const tempArg = taskList.map((item) => {
    //   if (item._id === _id) {
    //     item.type = type;
    //   }
    //   return item;
    // });
    // setTaskList(tempArg);
    const result = await updateTask({ _id, type });
    console.log(result);
    result?.status === "success" && getTasks();
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setItemToDel([...itemToDel, value]);
      setCheckedAll(taskList.length === itemToDel.length + 1);
    } else {
      setItemToDel(itemToDel.filter((item) => item !== value));
      setCheckedAll(false);
    }
  };

  const handleOnSelectAll = (e) => {
    const { checked } = e.target;

    if (checked) {
      setCheckedAll(true);
      setItemToDel(taskList.map((item) => item._id));
    } else {
      setItemToDel([]);
      setCheckedAll(false);
    }
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    // const filteredArg = taskList.filter(
    //   (item) => !itemToDel.includes(item._id)
    // );
    // setTaskList(filteredArg);

    // setItemToDel([]);
    const result = await deleteTasks(itemToDel);
    console.log(result);
    setResponse(result);
    result?.status === "success" && getTasks();
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        {response.message && (
          <div
            className={
              response.status === "success"
                ? "alert alert-success"
                : "alert alert-danger"
            }>
            {response.message}
          </div>
        )}
        <Form addTask={addTask} />
        <Display
          taskList={taskList}
          switchTask={switchTask}
          handleOnSelect={handleOnSelect}
          itemToDel={itemToDel}
        />
        {taskList.length ? (
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              onChange={handleOnSelectAll}
              checked={checkedAll}
            />
            <label htmlFor="">Select All The Tasks</label>
          </div>
        ) : null}

        <div className="row fw-bold">
          <div className="col">
            The total time allocated ={totalHours} <span id="totalHours"></span>
            Hours
          </div>
        </div>
        {itemToDel.length > 0 && (
          <div className="d-grid g-2">
            <button className="btn btn-danger" onClick={handleOnDelete}>
              Delete selected {itemToDel.length} Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
