import { useState } from 'react'
import StateLiftFilho from './StateLiftFilho'
import StateLiftSaudacao from './StateLiftSaudacao'

export default function StateLift() {
    const [nome, setNome] = useState('')

    return (
        <>
            <p>State Lift Pai</p>
            <StateLiftFilho setNome={setNome} />
            <StateLiftSaudacao nome={nome} />
            <br />
            {nome}
        </>
    )
}
