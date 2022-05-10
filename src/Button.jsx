import { useDispatch } from 'react-redux';
import './Button.css'

function increment() {
    return {type: "increment", payload: null}
    
}

function reset() {
    return {type: "reset", payload: null}
}
  
function Button() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default Button
