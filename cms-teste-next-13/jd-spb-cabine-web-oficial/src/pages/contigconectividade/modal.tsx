//import React from 'react'
import { useEffect } from 'react'
import { Modal } from 'react-bootstrap'

export default function ContigConectividadeModal(props: any) {

    useEffect(() => {
        // console.log('ContigConectividadeModal.Entrar')
        props.handleLimpar();
        props.mutationListarIF.mutate();

        return () => {
            // console.log('ContigConectividadeModal.Sair')
            props.handleLimpar();
        }
    }, [])

    return (
        <>
            {/* <!-- Modal  --> */}
            <Modal {...props} show={props.show} onHide={props.handleHideModal} dialogClassName="modal-dialog modal-dialog-centered modal-lg" contentClassName="modal-content" size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Teste de Conectividade (GEN0001)</Modal.Title>
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
                        <div className="col-12">
                            <div className="mb-3">
                                <label htmlFor="txtCamara" className="form-label">Câmaras*</label>
                                <div className="col m-1 mt-0 p-1 d-flex gap-3 dados-confirmacao-1">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkBacen" />
                                        <label className="form-check-label fw-bold" htmlFor="checkBacen">
                                            Bacen
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkSelic" />
                                        <label className="form-check-label fw-bold" htmlFor="checkSelic">
                                            Selic
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkCamaraB3" />
                                        <label className="form-check-label fw-bold" htmlFor="checkCamaraB3">
                                            Câmara B3
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkBalcaoB3" />
                                        <label className="form-check-label fw-bold" htmlFor="checkBalcaoB3">
                                            Balcão B3
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checSitraf" />
                                        <label className="form-check-label fw-bold" htmlFor="checSitraf">
                                            CIP Sitraf
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checCIPSiloc" />
                                        <label className="form-check-label fw-bold" htmlFor="checCIPSiloc">
                                            CIP Siloc
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label htmlFor="txtMsgECO" className="form-label">Mensagem ECO*</label>
                                <input autoComplete="off" value={props.txtMsgECO} onChange={props.handleInput} type="text" className="form-control" id="txtMsgECO" name="txtMsgECO" placeholder="" maxLength={100} required />
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
                                <button onClick={props.handleHideModal} type="button" className="col btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close">
                                    Cancelar
                                </button>
                                <button disabled={props.isLoading} type="submit" className="col btn btn-success">
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </form>

                </Modal.Body>
            </Modal>
            {/* <!-- Modal  --> */}
        </>
    )
}