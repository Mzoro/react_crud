import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  constructor() {
    super();
    this.state = { users: { mainhero : { name : "Fedor", lastName : "Dostoevsky" }}}
  }
  createUser(user) {
    const timestamp = (new Date()).getTime();
    this.state.users['user-'+timestamp] = user
    this.setState({ users : this.state.users })
  }
  updateUser(id, updatedUser) {
    this.state.users[id] = updatedUser
    this.setState({ users : this.state.users })
  }
  deleteUser(key) {
    delete this.state.users[key];
    this.setState({ users : this.state.users })
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       createUser: this.createUser.bind(this),
       users: this.state.users,
       deleteUser: this.deleteUser.bind(this),
       updateUser: this.updateUser.bind(this)
      })
    );
    return (
      <div>
        <h1>CRUD</h1>
        <ul>
          <li><Link to="/create" activeStyle={{ color: 'red' }}>New user</Link></li>
          <li><Link to="/index" activeStyle={{ color: 'red' }}>Show users</Link></li>
        </ul>
        {childrenWithProps}
      </div>
    )
  }
}

export default App

