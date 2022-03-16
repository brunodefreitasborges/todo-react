import React from 'react'
import Card from './Card'

function DoneImg(props) {

    if (props.done) {
        return <img src="./assets/on.png"></img>
    } else {
        return <img src="./assets/off.png"></img>
    }
}

function List(props) {


    return (
        <ul>
            {props.items.map(item => <li className={item.done ? "done item" : "item"} key={item.id}>
                <Card>
                    {item.text}
                    <div>
                        <button className="doneBtn" onClick={() => { props.onDone(item) }}><DoneImg done={item.done}></DoneImg></button>
                        <button className="deleteBtn" onClick={() => { props.onItemDeleted(item) }}><img src="./assets/deletar.png"></img></button>
                    </div>
                </Card></li>)}
        </ul>)

}

export default List