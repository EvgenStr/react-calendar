import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserCard, { userPropType } from './UserCard';
import { USERS_DB } from '../../../common/constants';
import style from './UserList.module.scss';

class UserList extends Component {
  toggleUserSelection = id => {
    const users = USERS_DB
  };
  mapUser = user => {
    return (
      <UserCard
        key={user.id}
        user={user}
        toggleUserSelection={this.toggleUserSelection}
      />
    );
  };
  render() {
    const users = USERS_DB;
    return (
      <section className={style.container}>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

UserList.propTypes = {
  setUsers: PropTypes.func,
  users: PropTypes.arrayOf(userPropType),
};

export default UserList;
