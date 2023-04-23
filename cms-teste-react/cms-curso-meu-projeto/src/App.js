import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import HelloWorld from './components/outros/HelloWorld'
// import Eventos from './components/eventos/Eventos'
// import List from './components/lista/List'
// import OutraList from './components/lista/OutraList'
// import StateLift from './components/StateLift'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'

let router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "/empresa", element: <Empresa />, },
  { path: "/contato", element: <Contato />, },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <h1>Meu App</h1> */}
      {/* <HelloWorld /> */}
      {/* <Eventos /> */}
      {/* <List /> */}
      {/* <OutraList /> */}
      {/* <StateLift /> */}
    </>
  )
}