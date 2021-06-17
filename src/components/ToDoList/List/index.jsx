import React from 'react';
import ListItem from '../ListItem';

function List({ data, deleteItem, isDoneHandler }) {
 
  const toDoElems = data.map((toDo) => <ListItem key={toDo.id} deleteItem={deleteItem} item={toDo} isDoneHandler={isDoneHandler} />)
  return (
    <ul>
      {toDoElems}
    </ul>
  )
}
export default List;