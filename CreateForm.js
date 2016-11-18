import React from 'react'

export default React.createClass({
  addUser(event) {
    event.preventDefault();
    const user = {
      name : event.target.elements[0].value,
      lastName : event.target.elements[1].value
    }
    this.props.createUser(user)
  },
  render() {
    return (
      <form onSubmit={this.addUser}>
        <input type="text" placeholder="Name" /> 
        <input type="text" placeholder="LastName" />
        <button type="submit">Create</button>
      </form>
    )
  }
})