import { useState } from 'react'

export default function EventosCondicional() {
    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const handleEnviarEmail = (event) => {
        event.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    const handleLimparEmail = () => {
        setUserEmail('')
    }

    return (
        <>
            <h2>Cadastro de E-mail</h2>

            <form>
                <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='Digite seu E-Mail...' />
                <button type='submit' onClick={handleEnviarEmail}>Enviar E-mail</button>
            </form>

            {userEmail && (
                <>
                    <p>User Email: {userEmail}</p>
                    <button onClick={handleLimparEmail}>Limpar E-mail</button>
                </>
            )}

        </>
    )
}