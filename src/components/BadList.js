import React from "react";

export const BadList = ({ badList, handleOnSelect, itemToDel, switchTask }) => {
  return (
    <>
      <div className="col-md">
        <h2 className="text-center">Bad List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="bad-task">
            {badList?.map((item) => {
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
                  <td> {item.task}</td>
                  <td> {item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick={() => switchTask(item._id, "entry")}
                      className="btn btn-warning">
                      <i className="fa-solid fa-left-long"></i>{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-end fw-bold">
          You could have saved =
          <span id="totalBadHr">
            {badList?.reduce((acc, item) => acc + +item.hr, 0)}
          </span>{" "}
          Hours{" "}
        </div>
      </div>
    </>
  );
};
