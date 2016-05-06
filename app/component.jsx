import React from 'react';
import store from './store.js'
export default class CommentBox extends React.Component {
  constructor(){
    super()
    this.state={
      content:JSON.stringify(store.getState().add)
    }
  }
  bundleClick(){
    store.dispatch({ type: 'ADD' });
    this.setState({
      content:JSON.stringify(store.getState().add)
    })
  }
  render () {
    return (
      <div>
        Hello redux!<br/>
        {this.state.content}
        <br/>
        <button onClick={ev=>{this.bundleClick()}}>我是按钮</button>
      </div>
    )
  }
}
