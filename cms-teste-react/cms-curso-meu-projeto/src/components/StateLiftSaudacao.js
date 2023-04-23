export default function StateLiftSaudacao({ nome }) {
    const gerarSaudacao = (name) => {
        return name === '' ? '...' : `Olá, ${name}, tudo bem?`
    }

    return (
        <>
            <p>State Lift Saudacao</p>
            <p>{gerarSaudacao(nome)}</p>
        </>
    )
}
