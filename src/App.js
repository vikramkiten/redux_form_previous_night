import React from 'react';
import {connect} from 'react-redux'
import action_one from './action';

function namechange(event,props){
      props.onefun(event.target.value)
}
function handlesubmit(event,props){
  event.preventDefault();
  alert(props.inputvalue)
}
function App(props) {
  return (
    <div className="App">
      <form onSubmit={(event)=>handlesubmit(event,props)}>
    <input type='text' value={props.name} name="name" onChange={(event)=>namechange(event,props)}/>
    <button type='submit'>submit</button>
    </form>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    inputvalue:state.inputvalue
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onefun:(data)=>dispatch(action_one(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
