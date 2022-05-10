import { useSelector } from 'react-redux'

function SecondaryContent() {
    const count = useSelector(state => state.counter)
    const msg = useSelector(state => state.msg)
    return (
        <div>
            The count is {count}
            <br></br>
            The message is {msg}
        </div>
    )
}

export default SecondaryContent;