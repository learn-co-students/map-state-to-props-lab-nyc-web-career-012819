import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    const userList = this.props.users.map(user => <li>{user.username} {this.props.userCount}</li>);

    return (
      <div>
        <ul>
          {
            this.props.userCount > 0 ?
              userList :
              null
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length, 
  };
}

export default connect(mapStateToProps)(Users);
