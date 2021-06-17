import React from 'react'

function ListItem({ isDoneHandler, deleteItem, item }) {
  console.log(item)
  return (<>
    <li>{item.name}</li>
    <input onChange={() => isDoneHandler(item.id)} type="checkbox"></input>
    <button onClick={() => deleteItem(item.id)}>delete</button>
  </>
  )
}
export default ListItem;