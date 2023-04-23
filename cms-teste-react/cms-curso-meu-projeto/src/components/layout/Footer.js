import style from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <ul className={style.list}>
                <li> <FaFacebook /></li>
                <li> <FaInstagram /> </li>
                <li> <FaLinkedin /> </li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    )
}
