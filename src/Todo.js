import react, { useEffect, useState } from 'react'
import './Todo.css'
import List from './components/List'
import Item from './components/Item'
import Modal from './components/Modal'
import TodoForm from './components/TodoForm'

function Todo() {

    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem('savedItems'));
        if (savedItems) {
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('savedItems', JSON.stringify(items))
    }, [items])

    function onAddItem(text) {

        let it = new Item(text)

        setItems([...items, it])
    }

    function onItemDeleted(item) {

        let filteredItems = items.filter(it => it.id != item.id)
        setItems(filteredItems)
    }

    function onDone(item) {

        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it;
        })

        setItems(updatedItems)
        console.log(it);

    }

    function onHideModal(e){
        let target = e.target;

        if(target.id == 'modal'){
            setShowModal(false);
        }
    }


    return (<div className="container">
        <header className='header'><h1>Lista de Tarefas</h1><button onClick={()=>{setShowModal(true)}} className='addButton'>+</button></header>
        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        <Modal show={showModal} onHideModal = {onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>)

}



export default Todo;