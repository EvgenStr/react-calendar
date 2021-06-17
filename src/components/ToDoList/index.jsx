import React, { useState } from 'react';
import List from './List';
import AddItemInput from './AddItemInput';
import { useToDoList } from 'hooks';
import style from './ToDoList.module.sass';

function ToDoList() {
  const [
    toDo,
    isAddActive,
    setIsAddActive,
    addNewItem,
    deleteItem,
    isDoneHandler,
  ] = useToDoList();

  return (
    <section className={style.container}>
      <List
        data={toDo}
        deleteItem={deleteItem}
        isDoneHandler={isDoneHandler}
      ></List>
      {isAddActive && (
        <button
          className={style.addToggler}
          onClick={() => setIsAddActive(!isAddActive)}
        >
          {'+ New task'}
        </button>
      )}
      {!isAddActive && <AddItemInput addNewItem={addNewItem} />}
    </section>
  );
}
export default ToDoList;
