import React from "react";

export const GoodList = ({
  taskList,
  switchTask,
  handleOnSelect,
  itemToDel,
}) => {
  return (
    <>
      <div className="col-md">
        <h2 className="text-center">Entry List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="task-list">
            {taskList.map((item) => {
              return (
                <tr key={item._id}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item._id}
                      onChange={handleOnSelect}
                      checked={itemToDel.includes(item._id)}
                    />
                  </th>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick={() => switchTask(item._id, "bad")}
                      className="btn btn-success">
                      <i className="fa-solid fa-right-long"></i>{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
