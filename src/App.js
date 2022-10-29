import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form />
        <Display />

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
