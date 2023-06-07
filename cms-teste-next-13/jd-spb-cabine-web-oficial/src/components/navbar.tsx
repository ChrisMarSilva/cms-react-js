import { useContext } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Router from 'next/router'
import { destroyCookie } from 'nookies'

import { AuthContext } from '@/contexts/AuthContext'
import { CABINE_TOKEN } from '@/utils/constants'
import img_default_user from '@/assets/img/default-user-icon.png'

export default function Navbar() {
    const { user } = useContext(AuthContext)

    async function signOut() {
        destroyCookie(undefined, CABINE_TOKEN)
        // destroyCookie({}, CABINE_TOKEN)
        // destroyCookie(null, CABINE_TOKEN, { path: '/',  })
        Router.push('/login')
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light px-3 justify-content-between py-0">

                <div className="d-flex align-items-center h-100">
                    <Link className="navbar-brand text-danger my-auto" href="/"><strong>JDSPB</strong>PSTI</Link>
                    <div className="hr-vertical"></div>

                    <div className="d-flex gap-3 h-100 ms-3 position-relative">

                        <a className="nav-item opcoes-nav nav-link text-reset h-100" id="menu-cadastro">Cadastro</a>
                        <div className="dropdown-menu-link" id="link-cadastro">
                            <Link href="/cadbdcliente">Banco de Dados</Link>
                            {/* <Link href="/cadcamaras">Câmaras</Link> */}
                        </div>

                        <a className="nav-item opcoes-nav nav-link text-reset h-100" id="menu-monitores">Monitores</a>
                        <div className="dropdown-menu-link" id="link-monitores">
                            <Link href="/monitorlogs">Monitor de Logs</Link>
                        </div>

                        <a className="nav-item opcoes-nav nav-link text-reset h-100" id="menu-contingencia">Contingência</a>
                        <div className="dropdown-menu-link" id="link-contingencia">
                            <Link href="/contigconectividade">Teste de Conectividade</Link>
                            <Link href="/contigcertificados">Consulta de Certificado</Link>
                        </div>

                        <Link className="nav-item opcoes-nav nav-link text-reset h-100" href="/logs">Logs</Link>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <Image className="default-user-icon" src={img_default_user} alt="default-user-icon" priority={true} placeholder='empty' />
                    <p className="usuario my-auto">
                        <span> <strong>Usuário:</strong>  {user?.nome.toUpperCase()}</span> <br />
                        <span> <strong>ISPB:</strong>  {user?.ispbif}</span>
                    </p>
                    <div className="hr-vertical mx-3"></div>
                    <button onClick={() => signOut()} type="button" className="btn-sair btn btn-outline-info d-flex gap-2 align-items-center">Sair
                        <div className="icone-sair" ></div>
                    </button>
                </div>

            </nav>
        </>
    )
}