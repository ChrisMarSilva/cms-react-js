export default function StateLiftFilho({ setNome }) {
    return (
        <>
            <p>State Lift Filho</p>
            <p>Digite o seu Nome:</p>
            <input type="text" onChange={e => setNome(e.target.value)} />
        </>
    )
}
