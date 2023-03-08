import {  useReducer } from 'react';

const initialState = {
  count: 0,
  numberToChangeBy: 1
}


const reducer = (state, action) => {
  
  switch(action.type) {
    case 'decrement':
      return {
        loading: false,

        ...state, count: parseInt(state.count, 10) - parseInt(state.numberToChangeBy, 10) 
        
      }
    case 'increment':
      return {
        loading: false,

        ...state, count: parseInt(state.count, 10) + parseInt(state.numberToChangeBy, 10) 
        
      }
    case 'update': 
      return {
        ...state,
        // result: action.result,
        // error: false,
        numberToChangeBy: action.value
      }
    default:
      
        // ...state,
        // error: action.message
        throw new Error();
      
    
     
    }

  }
  

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

    // const [count, setCount] = useState(0);
    // const [numberToChangeBy, setNumberToChangeBy] = useState(1);
    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({type: 'increment'})}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={() => dispatch({type: 'decrement'})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={(e) => dispatch({type: 'update', value: e.target.value })} type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);

}

export default Counter;