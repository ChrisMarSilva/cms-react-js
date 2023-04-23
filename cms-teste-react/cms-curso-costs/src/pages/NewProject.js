import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './NewProject.module.css'
import ProjectForm from './../components/project/ProjectForm'

export default function NewProject() {
    const navigate = useNavigate()

    const createPost = async (project) => {  // function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        const url = 'http://localhost:5000/projects'
        const headers = { 'Content-Type': 'application/json' }
        const data = JSON.stringify(project)

        // fetch(url, { method: 'POST', headers: headers, body: data })
        //     .then((resp) => resp.json())
        //     .then((data) => navigate('/projects', { message: 'Projeto criado com sucesso!' }))

        const response = await axios.post(url, data, { headers: headers })
        navigate('/projects', { message: 'Projeto criado com sucesso!' })

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}