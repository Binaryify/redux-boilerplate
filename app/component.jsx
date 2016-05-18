import React from 'react';
import { connect } from 'react-redux';
import {hah,hah2,hah3} from './action.js'
import store from "./store.js"

function mapStateToProps(state) {
  return {
    value: state.add,
    hzh:state.counter,
    test1:state.test1
  };
}
function mapDispatchToProps(dispatch) {
  return {
    tt: () => dispatch(hah()),
    tt2: () => dispatch(hah2()),
    tt3: (t) => dispatch(hah3(t))
  };
}
export default class CommentBox extends React.Component {
  constructor(props){
    super(props)
    // console.log(÷ßprops,'父props')
  }

  render () {
    console.log(this.props,'父props')
    return (
      <div>
        <List number={this.props.test1} tt={this.props.tt3}/>
      </div>
    )
  }
}

class List extends React.Component {
  constructor(props){
    super(props)
    this.state={
      content:props.number
    }

  }
  render () {
    console.log(this.props.number,'子props')
    return (
      <div>
          {this.props.number}
          <br/>
          <input ref="inputNumber"/>
          <button onClick={e => {
        e.preventDefault()
        this.props.tt(this.refs.inputNumber.value)
      }}>按钮</button>
      </div>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);
