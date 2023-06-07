//import React from 'react'
import { useEffect } from 'react'
import { Modal } from 'react-bootstrap'

export default function CadBdClienteModalDet(props: any) {

    useEffect(() => {
        // console.log('CadBdClienteModalDet.Entrar')

        return () => {
            // console.log('CadBdClienteModalDet.Sair')
            props.handleLimpar()
        }
    }, [])

    return (
        <>
            {/* <!-- Modal Detalhar --> */}
            <Modal {...props} show={props.show} onHide={props.handleHideModal} dialogClassName="modal-dialog modal-dialog-centered modal-lg" contentClassName="modal-content" size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Detalhamento do ID #{props.txtId}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body px-5 py-4">
                    <div className="row px-4 py-1 dados-confirmacao border-bottom ">
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Instituição</small><br />
                            <span>{props.txtInstituicao} - {props.txtNomeInstituicao}</span>
                        </div>
                    </div>
                    <div className="row px-4 py-1 dados-confirmacao border-bottom ">
                        <div className="col">
                            <small className="text-danger-dark fw-bold">SGDB</small><br />
                            <span>{props.txtNomeSGDB}</span>
                        </div>
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Servidor</small><br />
                            <span>{props.txtServidor}</span>
                        </div>
                    </div>
                    <div className="row px-4 py-1 dados-confirmacao border-bottom ">
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Banco</small><br />
                            <span>{props.txtBancoDados}</span>
                        </div>
                    </div>
                    <div className="row px-4 py-1 dados-confirmacao border-bottom ">
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Usuário</small><br />
                            <span>{props.txtUsuario}</span>
                        </div>
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Senha</small><br />
                            <span>{props.txtSenha}</span>
                        </div>
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Situação</small><br />
                            <span>{props.txtDescrStBd}</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* <!-- Modal Detalhar --> */}
        </>
    )
}