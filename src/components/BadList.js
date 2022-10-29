import React from "react";

export const BadList = ({ badList, handleOnSelect, itemToDel }) => {
  return (
    <>
      <div className="col-md">
        <h2 className="text-center">Bad List</h2>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="bad-task">
            {badList.map((item, i) => {
              return (
                <tr>
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
                  <td class="text-end">
                    <button onclick="markAsToDo({i})" class="btn btn-warning">
                      <i class="fa-solid fa-left-long"></i>{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-end fw-bold">
          You could have saved = <span id="totalBadHr">0</span> Hours{" "}
        </div>
      </div>
    </>
  );
};
