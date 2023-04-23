export default function EventosButton(props) {
    return (
        <button onClick={props.event}>
            {props.text}
        </button>
    )
}