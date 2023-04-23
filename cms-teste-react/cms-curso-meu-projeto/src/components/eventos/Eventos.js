import { useState } from 'react'
import EventosButton from './EventosButton'
import EventosCondicional from './EventosCondicional'


export default function Eventos() {
    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')
    const [counter, setCounter] = useState(0)

    const handleClickUp = () => {
        setCounter(prevState => prevState + 1)
    }

    const handleClickDown = () => {
        if (counter > 0)
            setCounter(prevState => prevState - 1)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Cadastrou o usuario - name: ${name} - senha: ${senha}`)
    }

    const handleEnviar = () => {
        console.log(`Evento Enviar`)
    }

    const handleReceber = () => {
        console.log(`Evento Receber`)
    }

    console.log(`Eventos ${counter}`)

    return (
        <>
            <h2>Testanto Eventos</h2>

            <br />
            <br />
            <p>Counter: {counter}</p>
            <button className='super-button' type='submit' onClick={handleClickUp}>Aumentar</button>
            <br />
            {counter > 0 && <button className='super-button' type='submit' onClick={handleClickDown}> Dimunuir </button>}

            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input value={name} onChange={e => setName(e.target.value)} type='text' id='name' name='name' placeholder='Digite seu nome...' />
                </div>
                <div>
                    <label htmlFor='senha'>Senha:</label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type='password' id='senha' name='senha' autocomplete="on" placeholder='Digite sua senha...' />
                </div>
                <div>
                    <br />
                    <input type='submit' value='Submit' />
                </div>
            </form>

            <br />
            <br />
            <EventosButton text="Enviar" event={handleEnviar} />
            <EventosButton text="Receber" event={handleReceber} />

            <br />
            <br />
            <EventosCondicional />

        </>
    )
}
