import React from 'react';
import ListItem from '../ListItem';
import style from './List.module.sass';

function List({ data, deleteItem, isDoneHandler }) {
 
  const toDoElems = data.map((toDo) => <ListItem key={toDo.id} deleteItem={deleteItem} item={toDo} isDoneHandler={isDoneHandler} />)
  return (
    <ul className={style.list}>
      {toDoElems}
    </ul>
  )
}
export default List;