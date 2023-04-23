import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import styles from './Project.module.css'
import Loading from './../components/layout/Loading'
import Container from './../components/layout/Container'
import Message from './../components/layout/Message'
import ProjectForm from './../components/project/ProjectForm'
import ServiceForm from './../components/service/ServiceForm'
import ServiceCard from './../components/service/ServiceCard'

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })

export default function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [saldo, setSaldo] = useState(0)
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [services, setServices] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    useEffect(() => {
        const url = `http://localhost:5000/projects/${id}`
        const headers = { 'Content-Type': 'application/json' }

        // Para ver o loading
        // setTimeout(
        //     () =>
        //         fetch(url, { method: 'GET', headers: headers })
        //             .then((resp) => resp.json())
        //             .then((data) => {
        //                 setProject(data)
        //                 setSaldo(parseFloat(data.budget) - parseFloat(data.cost))
        //                 setServices(data.services)
        //             }),
        //     0,
        // )

        async function getData() {
            const response = await axios.get(url, { headers: headers })
            setProject(response.data)
            setSaldo(parseFloat(response.data.budget) - parseFloat(response.data.cost))
            setServices(response.data.services)
        }

        // Para ver o loading
        // setTimeout(() => getData(), 0,) // Aguarde 0 milisegundos
        getData()

    }, [id])

    const editPost = (project) => {  // function editPost(project) {
        // budget validation
        if (project.budget < project.cost) {
            setMessage('O Orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setSaldo(parseFloat(data.budget) - parseFloat(data.cost))
                setShowProjectForm(!showProjectForm)
                setMessage('Projeto atualizado!')
                setType('success')
            })
    }

    const createService = async (project) => {  // function createService(project) {
        // last service
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()
        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        // maximum value validation
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setType('error')
            project.services.pop()
            return false
        }

        // add service cost to project cost total
        project.cost = newCost
        setSaldo(parseFloat(project.budget) - parseFloat(project.cost))

        const url = `http://localhost:5000/projects/${project.id}`
        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify(project)

        // fetch(url, { method: 'PATCH', headers: headers, body: body, })
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //         setServices(data.services)
        //         setShowServiceForm(!showServiceForm)
        //         setMessage('Serviço adicionado!')
        //         setType('success')
        //     })

        const response = await axios.patch(url, body, { headers: headers })
        setServices(response.data.services)
        setShowServiceForm(!showServiceForm)
        setMessage('Serviço adicionado!')
        setType('success')
    }

    const removeService = async (id, cost) => {  // function removeService(id, cost) {
        const servicesUpdated = project.services.filter(service => service.id !== id)
        const projectUpdated = project
        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
        setSaldo(parseFloat(saldo) + parseFloat(cost))

        const url = `http://localhost:5000/projects/${projectUpdated.id}`
        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify(projectUpdated)

        // fetch(url, { method: 'PATCH', headers: headers, body: body, })
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //         setProject(projectUpdated)
        //         setServices(servicesUpdated)
        //         setMessage('Serviço removido com sucesso!')
        //     })

        await axios.patch(url, body, { headers: headers })
        setProject(projectUpdated)
        setServices(servicesUpdated)
        setMessage('Serviço removido com sucesso!')
    }

    const toggleProjectForm = () => {  // function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    const toggleServiceForm = () => {  // function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>

                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}

                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>

                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>

                            {!showProjectForm ? (
                                <div className={styles.form}>
                                    <p> <span>Categoria:</span> {project.category.name} </p>
                                    <p> <span>Total do orçamento:</span> {formatter.format(project.budget)} </p>
                                    <p> <span>Total utilizado:</span> {formatter.format(project.cost)} </p>
                                    <p> <span>Saldo restante:</span> {formatter.format(saldo)} </p>
                                </div>
                            ) : (
                                <div className={styles.form}>
                                    <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                                </div>
                            )}
                        </div>

                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>

                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>

                            <div className={styles.form}>
                                {showServiceForm && <ServiceForm handleSubmit={createService} btnText="Adicionar Serviço" projectData={project} />}
                            </div>
                        </div>

                        <h2>Serviços:</h2>

                        <Container customClass="start">
                            {services.length > 0 && services.map((service) => <ServiceCard id={service.id} name={service.name} cost={service.cost} description={service.description} key={service.id} handleRemove={removeService} />)}
                            {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                        </Container>

                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
