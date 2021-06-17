import React from 'react';
import cx from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DoneIcon from '@material-ui/icons/Done';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './ListItem.module.sass';

function ListItem({ isDoneHandler, deleteItem, item: { name, id, isDone } }) {
  // console.log(item)
  return (<>
    <li className={style.listItem}>
      <FormControlLabel
        control={<Checkbox onChange={() => isDoneHandler(id)} icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<DoneIcon />}
          checked={isDone}
          name="checkedH" />}
      />
      <span className={cx(style.text, { [style.done]: isDone })}>{name}</span>
      <IconButton onClick={() => deleteItem(id)} color="secondary" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </li>


  </>
  )
}
export default ListItem;