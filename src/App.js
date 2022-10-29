import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { useState } from "react";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (data) => {
    setTaskList([...taskList, data]);
  };
  const switchTask = (_id) => {
    console.log(_id);

    const tempArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = "bad";
      }
      return item;
    });

    setTaskList(tempArg);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form addTask={addTask} />
        <Display taskList={taskList} switchTask={switchTask} />

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
