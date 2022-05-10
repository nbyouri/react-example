import { useDispatch } from 'react-redux';

function saveInputValue() {
    var msg = document.getElementById("myInput").value;
    return {type: "setMessage", payload: msg}
}

function TextInput() {
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" id="myInput"></input>
            <button onClick={() => dispatch(saveInputValue())}>Save Value</button>
        </div>
    );
}

export default TextInput
