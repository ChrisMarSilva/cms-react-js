import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom"
import { Repository } from "../models/RepositoryModel";

export function Repo() {
    const params = useParams()
    const currentRepository = params['*'] as string;
    const quryClient = useQueryClient()
    const navigate = useNavigate()

    async function handleChangeRepositoryDescription() {
        // await quryClient.invalidateQueries(['repos'])

        // chamada API para atulizar a descricao do repositório

        const previousRepos = quryClient.getQueryData<Repository[]>('repos')

        if (previousRepos) {
            const nextRepos = previousRepos.map(repo => {
                if (repo.full_name == currentRepository) {
                    return { ...repo, description: 'Testando' }
                } else {
                    return repo;
                }
            })

            quryClient.setQueryData<Repository[]>('repos', nextRepos)
        }

        navigate('/')
    }

    return (
        <div>
            <h1>Repository:</h1>
            <p>{currentRepository}</p>
            <button onClick={handleChangeRepositoryDescription}>Alterar descrição</button>
        </div>
    )
}