//import React from 'react'
import { useEffect } from 'react'
import { Modal } from 'react-bootstrap'

export default function CadBdClienteModalCad(props: any) {

    useEffect(() => {
        // console.log('CadBdClienteModalCad.Entrar')
        props.handleLimpar();
        props.mutationListarIF.mutate();

        return () => {
            // console.log('CadBdClienteModalCad.Sair')
            props.handleLimpar();
        }
    }, [])

    return (
        <>
            {/* <!-- Modal Incluir --> */}
            <Modal {...props} show={props.show} onHide={props.handleHideModal} dialogClassName="modal-dialog modal-dialog-centered modal-lg" contentClassName="modal-content" size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Incluir Banco de Dados</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body p-0">
                    <form className="body-pad row w-100 border-bottom-dashed-danger" onSubmit={props.handleSubmit}>
                        <div className="col-12">
                            <div className="mb-3">
                                <label htmlFor="txtInstituicao" className="form-label">Instituição*</label>
                                <select value={props.txtInstituicao} onChange={props.handleInput} className="form-select" id="txtInstituicao" name="txtInstituicao" required>
                                    <option value=""></option>
                                    {/* {props.lstIspb?.map((item: Ispb) => (<option key={item.ispb} value={item.ispb}>{item.ispb} - {item.nome}</option>))} */}
                                    {props.lstIspb && props.lstIspb?.length > 0 && props.lstIspb?.map(({ ispb, nome }: { ispb: string; nome: string }) => (<option key={ispb} value={ispb}>{ispb} - {nome}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="txtSGDB" className="form-label">SGDB*</label>
                                <select value={props.txtSGDB} onChange={props.handleInput} className="form-select" id="txtSGDB" name="txtSGDB" required >
                                    <option value=""></option>
                                    <option value="SQLServer">SQL Server</option>
                                    <option value="Oracle">Oracle</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="txtServidor" className="form-label">Servidor*</label>
                                <input value={props.txtServidor} onChange={props.handleInput} type="text" className="form-control" id="txtServidor" name="txtServidor" placeholder="" maxLength={100} required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label htmlFor="txtBancoDados" className="form-label">Banco*</label>
                                <input autoComplete="off" value={props.txtBancoDados} onChange={props.handleInput} type="text" className="form-control" id="txtBancoDados" name="txtBancoDados" placeholder="" maxLength={100} required />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="txtUsuario" className="form-label">Usuário*</label>
                                <input autoComplete="off" value={props.txtUsuario} onChange={props.handleInput} type="text" className="form-control" id="txtUsuario" name="txtUsuario" placeholder="" maxLength={200} required />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="txtSenha" className="form-label">Senha*</label>
                                <input autoComplete="off" value={props.txtSenha} onChange={props.handleInput} type="text" className="form-control" id="txtSenha" name="txtSenha" placeholder="" maxLength={100} required />
                            </div>
                        </div>
                    </form>

                    <div className="row body-pad">
                        <div className="col-12">
                            <div className="d-flex gap-3">
                                {props.isError && <p> <strong>Error:</strong> {props.error} {(props.error as Error).message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="linha-vertical-danger w-100"></div>

                    <form className="row body-pad" onSubmit={props.handleSubmit}>
                        <div className="col">
                            <span className="text-danger fw-bold">*Campos Obrigátorios</span>
                        </div>
                        <div className="col-4">
                            <div className="d-flex gap-3">
                                <button onClick={props.handleHideModal} type="button" className="col btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                                <button disabled={props.isLoading} type="submit" className="col btn btn-success">Confirmar</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            {/* <!-- Modal Incluir --> */}
        </>
    )
}