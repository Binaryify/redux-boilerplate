import React from 'react';
import { connect } from 'react-redux';
import {hah,hah2} from './action.js'

function mapStateToProps(state) {
  return {
    value: state.add,
    hzh:state.counter
  };
}
function mapDispatchToProps(dispatch) {
  return {
    tt: () => dispatch(hah()),
    tt2: () => dispatch(hah2())
  };
}
export default class CommentBox extends React.Component {
  constructor(props){
    super(props)
    this.state={
      content:0,
      content2:0
    }
    this.init(props)
  }
  init(props){
    props.tt()
    props.tt2()
    
  }
  bundleClick(){
    this.props.tt()
    this.props.tt2()
    this.setState({
      content:this.props.value,
      content2:this.props.hzh
    })
  }
  render () {
    return (
      <div>
        hello redux
        <br/>
        {this.state.content}
        <br/>
        {this.state.content2}
        <br/>
        <button onClick={this.bundleClick.bind(this)}>按钮</button>
      </div>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);
