import React, { useContext } from "react"
import { ThemeContext } from './../context/ThemeContext'

const Contact = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <h1>Página contact</h1>
            <p>O tema atual é {theme}</p>
        </div>
    )
}

export default Contact;