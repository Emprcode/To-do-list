import React from 'react'

export const BadList = () => {
  return (
    <>
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
    </>
  )
}
