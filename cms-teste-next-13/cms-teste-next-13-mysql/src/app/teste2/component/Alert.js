function Alert({ text, setAlertMessage, style, }) {
    const handleAlert = async (e) => {
        e.preventDefault();
        setAlertMessage("");
    }

    return (
        <>
            <div className="alert w-50 align-self-center alert-success alert-dismissible fade show" style={{ display: style }} role="alert" >
                {text}
                <button type="button" className="close" onClick={e => handleAlert(e)}>  {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close"> */}
                    <span aria-hidden="true">
                        &times;
                    </span>
                </button>
            </div>
        </>
    )
}

export default Alert;