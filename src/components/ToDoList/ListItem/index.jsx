import React from 'react';
import cx from 'classnames';
import style from './ListItem.module.sass';

function ListItem({ isDoneHandler, deleteItem, item }) {
  // console.log(item)
  return (<>
    <li className={style.listItem}>
      <input onChange={() => isDoneHandler(item.id)} type="checkbox"></input>
      <span className={cx(style.text, { [style.done]: item.isDone })}>{item.name}</span>

      <button className={style.btnDel} onClick={() => deleteItem(item.id)}>delete</button>
    </li>


  </>
  )
}
export default ListItem;