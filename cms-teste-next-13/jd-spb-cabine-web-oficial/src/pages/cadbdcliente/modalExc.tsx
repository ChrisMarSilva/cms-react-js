//import React from 'react'
import { useEffect } from 'react'
import { Modal } from 'react-bootstrap'

export default function CadBdClienteModalExc(props: any) {

    useEffect(() => {
        // console.log('CadBdClienteModalExc.Entrar')

        return () => {
            // console.log('CadBdClienteModalExc.Sair')
            props.handleLimpar()
        }
    }, [])

    return (
        <>''
            {/* <!-- Modal Excluir --> */}
            <Modal {...props} show={props.show} onHide={props.handleHideModal} dialogClassName="modal-dialog modal-dialog-centered modal-lg" contentClassName="modal-content" size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton className="modal-header" />
                <Modal.Body className="modal-body px-5 pt-0 pb-4">
                    <h4 className="modal-title text-danger fw-bold text-center mb-2" id="staticBackdropLabel">Você tem certeza que deseja excluir esse Banco de Dados?</h4>

                    <input type="hidden" id="txtId" name="txtId" value={props.txtId} />

                    <div className="row px-4 py-1 dados-confirmacao border-bottom ">
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Instituição</small><br />
                            <span>{props.txtInstituicao} - {props.txtNomeInstituicao}</span>
                        </div>
                        <div className="col">
                            <small className="text-danger-dark fw-bold">SGDB</small><br />
                            <span>{props.txtNomeSGDB}</span>
                        </div>
                    </div>
                    <div className="row px-4 py-1 dados-confirmacao border-bottom ">
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Servidor</small><br />
                            <span>{props.txtServidor}</span>
                        </div>
                        <div className="col">
                            <small className="text-danger-dark fw-bold">Banco</small><br />
                            <span>{props.txtBancoDados}</span>
                        </div>
                    </div>
                    <div className="row px-4 py-1 ">
                        <div className="col">
                            {props.isError && <span> <strong>Error:</strong> {props.error} {(props.error as Error).message}</span>}
                        </div>
                    </div>
                    <form className="row body-pad" onSubmit={props.handleSubmit}>
                        <div className="row gap-3 justify-content-center mt-4">
                            <button onClick={props.handleHideModal} type="button" className="col-2 btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                            <button disabled={props.isLoading} type="submit" className="col-2 btn btn-danger">Excluir</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            {/* <!-- Modal Excluir --> */}
        </>
    )
}