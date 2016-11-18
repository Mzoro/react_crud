import React from 'react';
import { Link, browserHistory } from 'react-router'


class IndexUsers extends React.Component{
  renderUser(key) {
    const user = this.props.users[key];
    const path = `/edit/${key}`;
    if (!user) {
      return <li key={key}>Sorry</li>
    }
    return (
      <li key={key}>
        {user.name+" "+user.lastName+" "}
        <Link to={path}><button>Update</button></Link>
        <button onClick={this.props.deleteUser.bind(null, key)}>Delete</button>
      </li>
    )  
  }
  render(){
    return (
      <div>
        Our users
        <ul>
          {Object.keys(this.props.users).map(this.renderUser.bind(this))}
        </ul>
      </div>  
    )
  }
}

export default IndexUsers