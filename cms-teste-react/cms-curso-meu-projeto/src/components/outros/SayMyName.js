import React from 'react'

export default function SayMyName(props) {
    const { nome } = props

    return (
        <>
            <p>Meu nome é {nome}</p>
        </>
    )
}
