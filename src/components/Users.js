import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(userObj => {
            return <li><div>{userObj.username}</div></li>
          })}
        </ul>
        <div>{this.props.users.length}</div>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {users: state.users}
  }

export default connect(mapStateToProps)(Users)
