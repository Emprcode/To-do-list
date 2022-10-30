import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { useState } from "react";

const hourPerWeek = 7 * 24;

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [itemToDel, setItemToDel] = useState([]);

  const totalHours = taskList.reduce((subTtl, item) => subTtl + +item.hr, 0);

  const addTask = (data) => {
    if (hourPerWeek < totalHours + +data.hr) {
      return alert("Boss, you dont have enough time");
    }
    setTaskList([...taskList, data]);
  };
  const switchTask = (_id, type) => {
    const tempArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });

    setTaskList(tempArg);
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;

    checked
      ? setItemToDel([...itemToDel, value])
      : setItemToDel(itemToDel.filter((item) => item !== value));
  };

  const handleOnDelete = () => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    const filteredArg = taskList.filter(
      (item) => !itemToDel.includes(item._id)
    );
    setTaskList(filteredArg);

    setItemToDel([]);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form addTask={addTask} />
        <Display
          taskList={taskList}
          switchTask={switchTask}
          handleOnSelect={handleOnSelect}
          itemToDel={itemToDel}
        />

        <div className="row fw-bold">
          <div className="col">
            The total time allocated ={totalHours} <span id="totalHours"></span>{" "}
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
