export default function OutraList() {
    const itens = ['React', 'Vue', 'Angular']

    return (
        <>
            <h4>Outra Lista</h4>
            <ul>
                {
                    itens.map((item, idx) => <li key={idx}>#{idx + 1} - {item}</li>)
                }
            </ul>
        </>
    )
}
