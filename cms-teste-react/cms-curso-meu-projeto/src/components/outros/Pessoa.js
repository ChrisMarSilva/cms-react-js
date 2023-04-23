import React from 'react'

//export default function Pessoa(props) {
export default function Pessoa({ nome, idade }) {
    //const { nome, idade } = props

    return (
        <>
            <p>Meu nome é {nome} e idade {idade}</p>
        </>
    )
}
