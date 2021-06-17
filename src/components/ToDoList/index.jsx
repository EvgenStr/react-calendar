import React, { useState } from 'react';
import List from './List';
import AddItemInput from './AddItemInput';
import style from './ToDoList.module.sass';

function ToDoList() {
  const [toDo, setTodo] = useState([{ id: 1, name: 'buy milk', isDone: false }, { id: 2, name: 'test', isDone: true }, { id: 3, name: 'some text', isDone: false }])
  const addNewItem = (item) => {
    setTodo([...toDo, item])
  }
  const deleteItem = (id) => {
    setTodo(toDo.filter(item => item.id !== id))
  }
  const isDoneHandler = (id) => {
    setTodo(toDo.map((item) => ({
      ...item,
      isDone: item.id === id ? !item.isDone : item.isDone,
    })));
    // console.log(toDo, 'isdone', id)
  }
  return (<section className={style.container}>
    <AddItemInput addNewItem={addNewItem} />
    <List data={toDo} deleteItem={deleteItem} isDoneHandler={isDoneHandler}></List>
  </section>
  )
}
export default ToDoList;