import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { parseCookies } from 'nookies'

import { useAuth } from '@/hooks/useAuth'
import { CABINE_TOKEN } from '@/utils/constants'
import img_logo_login from '@/assets/img/logo-colorido-horizontal.png'
import img_atendimento from '@/assets/icons/atendimento.svg'

export default function LoginPage() {

    const {
        usuario, senha, ispbif, lstif, error, isLoading,
        setUsuario, setSenha, setIspbif,
        handleSubmit, handleCancel, handleListaIf,
    } = useAuth()

    return (
        <>
            <Head>
                <title>..:: Login - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <main>
                <div className="position-absolute w-100 h-100 d-flex justify-content-center container-login">
                    <div className="card-login d-flex flex-column align-self-start">
                        <Image src={img_logo_login} alt="logo" id="logo-login" className="mx-auto" priority={true} placeholder='empty' />
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="w-100 mt-4">
                                <div className="mb-3">
                                    <label htmlFor="usuario" className="form-label">Usuário</label>
                                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" className="form-control" id="usuario" name="usuario" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="senha" className="form-label">Senha</label>
                                    <input onBlur={handleListaIf} value={senha} onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="senha" name="senha" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ispbif" className="form-label">Instituição</label>
                                    <select defaultValue={ispbif} onChange={(e) => setIspbif(e.target.value)} className="form-select" id="ispbif" required>
                                        {lstif && lstif?.length > 0 && lstif?.map(item => (<option key={item.ispb} value={item.ispb}>{item.nome}</option>))}
                                    </select>
                                </div>
                                <div className="mt-4 d-flex justify-content-between gap-2">
                                    <button disabled type="button" className="col btn btn-outline-primary disabled">
                                        Mudar Senha
                                    </button>
                                    <button disabled={isLoading} onClick={handleCancel} type="button" className="col btn btn-outline-danger">
                                        Cancelar
                                    </button>
                                    <button disabled={isLoading} type="submit" className="col btn btn-success">
                                        {isLoading ? "Carregando..." : "Entrar"}
                                    </button>
                                </div>
                                {error && <p><br /><strong>Error:</strong> {error}</p>}
                            </div>
                        </form>
                    </div>
                    <div className="position-absolute atendimento text-white">
                        <div className="border-bottom d-flex justify-content-center align-items-center px-2 pb-2 gap-2">
                            <Image src={img_atendimento} className="" alt="tendimento" />
                            <p className="my-auto"> Central de Atendimento ao <strong>CLIENTE DA JD</strong> </p>
                        </div>
                        <div className="mt-2">
                            <p className="text-end">
                                A Central de Atendimento ao cliente da JD está disponível para você de
                                <br />
                                <strong>Segunda à Sexta das 09h00 às 18h00</strong> <br />
                                (dias úteis). <br /><br />
                                Fale com nosso suporte pelos canais: <br /><br />
                                <strong>Telefone:</strong> <br /> +55 11 3150-1830 <br /><br />
                                <strong>E-mail:</strong> <br /> jdspb@jdconsultores.com.br
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { [CABINE_TOKEN]: token } = parseCookies(ctx)
    if (token) return { redirect: { destination: '/', permanent: false, } }
    return {
        props: {}
    }
}
