import React from 'react'

export const GoodList = () => {
  return (
    <>
      <div className="col-md">
            <h2 className="text-center">Entry List</h2>
            <hr />
            <table className="table table-striped table-hover">
              <tbody id="task-list"></tbody>
            </table>
          </div>
    </>
  )
}
