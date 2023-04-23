import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../project/ProjectCard.module.css'

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })

export default function ServiceCard({ id, name, cost, description, handleRemove }) {
    const handleRemoveLocal = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p> <span>Custo total:</span> {formatter.format(cost)} </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={handleRemoveLocal}> <BsFillTrashFill /> Excluir </button>
            </div>
        </div>
    )
}