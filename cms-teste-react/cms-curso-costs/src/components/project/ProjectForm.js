import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

export default function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [project, setProject] = useState(projectData || {})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/categories'
        const headers = { 'Content-Type': 'application/json' }

        // fetch(url, { method: 'GET', headers: headers })
        //     .then((resp) => resp.json())
        //     .then((data) => setCategories(data))

        async function getData() {
            const response = await axios.get(url, { headers: headers })
            setCategories(response.data)
        }

        getData()

    }, [])

    const handleSubmitLocal = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    const handleChange = (e) => { //function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    const handleCategory = (e) => { //function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={handleSubmitLocal} className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name} />
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget} />
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <SubmitButton text={btnText} />
        </form>
    )
}
