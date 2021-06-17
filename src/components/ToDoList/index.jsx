import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './List';
import AddItemInput from './AddItemInput';
import { useToDoList } from 'hooks';
import style from './ToDoList.module.sass';

function ToDoList () {
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
        <Button
          onClick={() => setIsAddActive(!isAddActive)}
          className={style.addToggler}
          startIcon={<AddIcon />}
        >
          New task
        </Button>
      )}

      {!isAddActive && <AddItemInput addNewItem={addNewItem} />}
    </section>
  );
}
export default ToDoList;
