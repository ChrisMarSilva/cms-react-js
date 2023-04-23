import Frase from './Frase'
import SayMyName from './SayMyName'
import Pessoa from './Pessoa'

export default function HelloWorld() {
    return (
        <>
            <h1>Hello World</h1>
            <Frase />
            <Frase />
            <Frase />

            <SayMyName nome="Chris MarSil" />
            <SayMyName nome="Pessoa 1" />
            <SayMyName nome="Pessoa 2" />

            <Pessoa nome="Chris MarSil" idade={36} />
        </>
    )
}
