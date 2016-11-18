import React from 'react'

export default React.createClass({
  saveUser(event) {
    event.preventDefault();
    const id = this.props.params.userId;
    const userUpdated = {
      name : event.target.elements[0].value,
      lastName : event.target.elements[1].value
    }
    this.props.updateUser(id, userUpdated)
  },
  render() {
    const id = this.props.params.userId;
    const user = this.props.users[id]
    return (
      <form onSubmit={this.saveUser}>
        <input type="text" defaultValue={user.name}/> 
        <input type="text" defaultValue={user.lastName} />
        <button type="submit">Save</button>
      </form>
    )
  }
})
