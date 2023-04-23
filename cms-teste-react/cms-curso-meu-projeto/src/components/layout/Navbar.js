import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import { FaAvianex, FaAngellist } from "react-icons/fa";
import { IoAccessibilitySharp } from "react-icons/io5";

export default function Navbar() {
    return (
        <ul className={style.list}>
            <li className={style.item}> <Link to='/'> <IoAccessibilitySharp /> Home</Link> </li>
            <li className={style.item}> <Link to='/empresa'> <FaAvianex /> Empresa</Link> </li>
            <li className={style.item}> <Link to='/contato'> <FaAngellist /> Contato</Link> </li>
        </ul>
    )
}
