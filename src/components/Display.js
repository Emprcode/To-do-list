import React from 'react'
import { BadList } from './BadList'
import { GoodList } from './GoodList'

export const Display = ({taskList, switchTask}) => {
  const entList = taskList.filter((item) => item.type === "entry" );
  const badList = taskList.filter((item) => item.type === "bad" );

  return (
    <>
      <div className="row mt-5 g-2">
          < GoodList  taskList = {entList} switchTask= {switchTask}/>
          < BadList badList = {badList}/>
        </div>
    </>
  )
}
