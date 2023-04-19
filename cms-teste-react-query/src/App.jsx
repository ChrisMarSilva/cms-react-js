import axios from "axios"
import { useQuery, useMutation, useQueryClient } from "react-query"
import "./App.css"

function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery("todos", async () => {
    const url = "http://localhost:8080/todos"
    const response = await axios.get(url) //.then((response) => response.data)
    return response.data
  }, { retry: 3, })

  const mutation = useMutation({
    mutationFn: ({ todoId, completed }) => axios.patch(`http://localhost:8080/todos/${todoId}`, { completed, }).then((response) => response.data),
    onSuccess: data => { queryClient.setQueryData("todos", (currentData) => currentData.map((todo) => (todo.id === data.id ? data : todo))) },
    onError: error => console.error(error),
  })

  if (isLoading) return <div className="loading">Carregando...</div>

  if (error) return <div className="loading">Algo deu errado!</div>

  return (
    <div className="app-container">
      <div className="todos">
        <h2>Todos & React Query</h2>
        {data.map((todo) => (
          <div
            onClick={() => mutation.mutate({ todoId: todo.id, completed: !todo.completed })}
            className={`todo ${todo.completed && "todo-completed"}`}
            key={todo.id}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
