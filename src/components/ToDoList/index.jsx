import React from 'react';
import List from './List';
import AddItemInput from './AddItemInput';
import { useToDoList } from 'hooks'
import style from './ToDoList.module.sass';

function ToDoList() {
  const [toDo, addNewItem, deleteItem, isDoneHandler] = useToDoList();
 
  return (<section className={style.container}>
    <List data={toDo} deleteItem={deleteItem} isDoneHandler={isDoneHandler}></List>
    <AddItemInput addNewItem={addNewItem} />
  </section>
  )
}
export default ToDoList;