import React from 'react'
import style from './Frase.module.css'

export default function Frase() {
    return (
        <div lassName={style.fraseContainer}>
            <p className={style.fraseContente}>Frase do componente #2</p>
        </div>
    )
}
