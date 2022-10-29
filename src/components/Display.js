import React from 'react'
import { BadList } from './BadList'
import { GoodList } from './GoodList'

export const Display = ({taskList, switchTask, handleOnSelect, itemToDel}) => {
  const entList = taskList.filter((item) => item.type === "entry" );
  const badList = taskList.filter((item) => item.type === "bad" );

  return (
    <>
      <div className="row mt-5 g-2">
          < GoodList  taskList = {entList} switchTask= {switchTask} handleOnSelect = {handleOnSelect}  itemToDel={itemToDel}/>
          < BadList badList = {badList} handleOnSelect = {handleOnSelect}  itemToDel={itemToDel}/>
        </div>
    </>
  )
}
