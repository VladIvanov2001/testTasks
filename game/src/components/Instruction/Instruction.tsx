import React, { ReactElement } from "react";
import './Instruction.css'

export const Instruction = (): ReactElement =>{
  return(
    <div >
      <div className="instruction">
        <div className="color-on-board red"></div>
        <span>for active unit</span>
      </div>
      <div className="instruction">
        <div className="color-on-board black"></div>
        <span>color on hover</span>
      </div>
      <div className="instruction">
        <div className="color-on-board blue"></div>
        <span>color for unit on which you can act</span>
      </div>
    </div>
  )
}
