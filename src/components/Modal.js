import React, { useState } from "react"
import Card from './Card'

function Modal(props) {


    return (
        <div id="modal" onClick={props.onHideModal} className={props.show ? "modal" : "model hide"}>
            <Card>
                {props.children}
            </Card>
        </div>
    )
}

export default Modal