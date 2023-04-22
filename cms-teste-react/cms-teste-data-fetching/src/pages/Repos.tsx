// import { useEffect, useState } from "react"
// import { useFetch } from "./../hooks/useFetch"
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query'
import { Repository } from './../models/RepositoryModel'

// type Repository = {
//   full_name: string;
//   description: string;
// }

export function Repos() {

    // const [repositories, setRepositories] = useState<Repository[]>([])

    // useEffect(() => {
    //   const url = "https://api.github.com/users/diego3g/repos";
    //   // fetch(url)
    //   //   .then(response => response.json())
    //   //   .then(data => setRepositories(data));
    //   axios.get(url)
    //     .then(response => setRepositories(response.data));
    // }, [])

    // const url = "https://api.github.com/users/diego3g/repos"
    // const url = "users/diegddo3g/repos"
    // const { data: repositories, error, isFetching } = useFetch<Repository[]>(url)

    // const { data: repositories, isFetching } = useQuery<Repository[]>('repos', async () => {
    //   const url = "https://api.github.com/users/diego3g/repos";
    //   const response = await axios.get(url);
    //   return response.data;
    // })

    const { data: repositories, isError, isLoading: isFetching }
        = useQuery<Repository[]>('repos', getRepositories, {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 50, // 1Min
        })

    async function getRepositories(): Promise<Repository[]> {
        const url = "https://api.github.com/users/diego3g/repos"
        const response = await axios.get<Repository[]>(url);
        return response.data;
    }

    return (
        <div>
            <h1>Repositories:</h1>

            {isFetching && <h3>Carregando...</h3>}

            {/* {error?.message && <p><strong>Error:</strong> {error.message}</p>} */}
            {isError && <h3>Ocorreu algum problema :(</h3>}

            <ul>
                {
                    repositories?.map(repo => {
                        return (
                            <li key={repo.full_name}>
                                <Link to={`repo/${repo.full_name}`}>{repo.full_name}</Link>
                                <p>{repo.description}</p>
                            </li>
                        );
                    })
                }
            </ul>

        </div>
    )
}

// 