import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import styles from './Projects.module.css'
import Container from './../components/layout/Container'
import Loading from './../components/layout/Loading'
import LinkButton from './../components/layout/LinkButton'
import Message from './../components/layout/Message'
import ProjectCard from './../components/project/ProjectCard'

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')
    const location = useLocation()

    let message = location.state ? location.state.message : ''
    // if (location.state) message = location.state.message

    useEffect(() => {
        const url = 'http://localhost:5000/projects'
        const headers = { 'Content-Type': 'application/json' }

        // Para ver o loading
        // setTimeout(() =>
        //         fetch(url, { method: 'GET', headers: headers, })
        //             .then((resp) => resp.json())
        //             .then((data) => {
        //                 setProjects(data)
        //                 setRemoveLoading(true)
        //             }),
        //     100
        // )

        async function getData() {
            const response = await axios.get(url, { headers: headers })
            setProjects(response.data)
            setRemoveLoading(true)
        }

        // Para ver o loading
        // setTimeout(() => getData(), 100) // Aguarde 100 milisegundos
        getData()

    }, [])

    const removeProject = async (id) => {  // function removeProject(id) {
        const url = `http://localhost:5000/projects/${id}`
        const headers = { 'Content-Type': 'application/json' }

        // fetch(url, { method: 'DELETE', headers: headers })
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //         setProjects(projects.filter((project) => project.id !== id))
        //         setProjectMessage('Projeto removido com sucesso!')
        //     })

        await axios.delete(url, { headers: headers })
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
    }

    return (
        <div className={styles.project_container}>

            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto" />
            </div>

            {message && <Message type="success" msg={message} />}

            {projectMessage && <Message type="success" msg={projectMessage} />}

            <Container customClass="start">
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && <p>Não há projetos cadastrados!</p>}
                {
                    projects.length > 0
                    &&
                    projects.map((project) => <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id} handleRemove={removeProject} />)
                }
            </Container>

        </div>
    )
}
