//import React from 'react'

export default function CadBdClienteFiltro(props: any) {
    //  console.log(props)
    return (
        <>
            {/* <!-- Filtro --> */}
            <form className="row m-3 pt-3" onSubmit={props.handleSubmit}>
                <span className="fw-bold">Filtro de Pesquisa</span>
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="txtInstituicao" className="form-label">Instituição</label>
                        <select value={props.txtInstituicao} onChange={props.handleInput} className="form-select" id="txtInstituicao" name="txtInstituicao">
                            <option value=""></option>
                            {/* {props.lstIspb?.length > 0 && props.lstIspb?.map((item: Ispb) => (<option key={item.ispb} value={item.ispb}>{item.ispb} - {item.nome}</option>))} */}
                            {props.lstIspb && props.lstIspb?.length > 0 && props.lstIspb?.map(({ ispb, nome }: { ispb: string; nome: string }) => (<option key={ispb} value={ispb}>{ispb} - {nome}</option>))}
                        </select>
                    </div>
                </div>
                <div className="col-3 align-self-center ms-auto">
                    <div className="d-flex gap-3">
                        <button disabled={props.isLoading} onClick={props.handleLimpar} type="button" className="col btn btn-outline-danger">
                            Limpar
                        </button>
                        <button disabled={props.isLoading} type="submit" className="col btn btn-outline-success d-flex gap-2 justify-content-center btn-filtro">Filtrar
                            <div className={props.isLoading ? "icone-filtro-loop" : "icone-filtro"} ></div>
                        </button>
                    </div>
                </div>
            </form>
            {/* <!-- Filtro --> */}
        </>
    )
}