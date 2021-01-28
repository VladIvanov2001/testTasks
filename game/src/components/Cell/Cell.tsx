import React from "react";
import './Cell.css';

export const Cell = (props: { value: number }) => {
    return(
        <div className="square">
            {props.value}
        </div>
    )
}
