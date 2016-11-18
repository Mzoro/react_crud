import React from 'react';
import Navlink from './Navlink';
import { browserHistory } from 'react-router'

export default React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    browserHistory.push(path)
  },
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Navlink to="/repos/reactjs/react-router">React Router</Navlink></li>
          <li><Navlink to="/repos/facebook/react">React</Navlink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" /> / {' '}
              <input type="text" placeholder="repo" /> / {' '}
              <button type="submit">Go</button>
            </form>   
          </li>           
        </ul>  
        {this.props.children}
      </div>
    )  
  }
})