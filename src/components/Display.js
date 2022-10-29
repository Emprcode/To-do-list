import React from 'react'
import { BadList } from './BadList'
import { GoodList } from './GoodList'

export const Display = () => {
  return (
    <>
      <div className="row mt-5 g-2">
          < GoodList />
          < BadList/>
        </div>
    </>
  )
}
