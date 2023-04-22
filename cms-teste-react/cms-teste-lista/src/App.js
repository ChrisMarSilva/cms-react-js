import { useState, useEffect } from 'react';

export default function App() {

  const [repos, setRepos] = useState([])
  //const [filteredRepos, setFilteredRepos] = useState([])
  const [search, setSearch] = useState('')

  console.log('Renderizou')

  useEffect(() => {
    fetch("https://api.github.com/users/diego3g/repos")
      .then((response) => response.json())
      //.then((data) => { setRepos(data); });
      .then(data => setRepos(data.map(repo => ({ ...repos, name: repo.name }))));
    // eslint-disable-next-line
  }, [])

  // useEffect(() => {
  //   if (search.length) {
  //     setFilteredRepos(repos.filter(repo => repo.name.toString().toLowerCase().includes(search.toLowerCase())));
  //   }
  //   // eslint-disable-next-line
  // }, [search])

  const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.toString().toLowerCase().includes(search.toLowerCase()))
    : repos; // []

  return (
    <div>

      <input name="search" type="text" placeholder="Buscar...." onChange={e => setSearch(e.target.value)} />

      <ul>
        {filteredRepos.map(repo => <li key={repo.name}>{repo.name}</li>)}
      </ul>

      {/* {
        search.length > 0 ?
          (
            <ul>
              {filteredRepos.map(repo => <li key={repo.name}>{repo.name}</li>)}
            </ul>
          )
          :
          (
            <ul>
              {repos.map(repo => <li key={repo.name}>{repo.name}</li>)}
            </ul>
          )
      } */}

    </div>
  );
}
