import React from 'react';
import cx from 'classnames';
import style from './ListItem.module.sass';

function ListItem({ isDoneHandler, deleteItem, item }) {
  // console.log(item)
  return (<>
    <li className={cx(style.ListItem, { [style.done]: item.isDone })}>
      <input onChange={() => isDoneHandler(item.id)} type="checkbox"></input>
      <span>{item.name}</span>

      <button onClick={() => deleteItem(item.id)}>delete</button>
    </li>


  </>
  )
}
export default ListItem;