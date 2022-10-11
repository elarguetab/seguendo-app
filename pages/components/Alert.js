const Alert = ({mostrarAlerta, titulo, mensaje, setMostrarAlerta}) =>{
    return(
    <>
        { mostrarAlerta === true &&
        <div className="tixed top-0 rigt-0 bg-white shadow-lg mx-auto w-96  max-w-full
            text-sm pointer-events-auto bg-clip-padding rounded-lg black mb-3"
            role="alert"
            aria-live="assertive"
            aria-atomic="true">
                <div className="bg-white flex justify-between items-center py-2 px-3 bg-clip-padding
                   border-b border-blue-500  rounded-t-lg ">
                    <p className="font-bold text-gray-700 flex items-center" >
                        <strong className="pr-2" >!</strong> {titulo}
                    </p>

                    <div className="flex items-center" >
                        <button type="button "
                        className="btn-clse btn-close-white box-content w-4 h-4 ml-2 text-gray-900 hover:text-black
                            border-none rounder-none opacity-50 focus:shadw-none focus:outline-none focus:opacity-100
                            hover:text-white hover:opacity-75 hover:no-onderline" data-mdb-dismiss="toast" aria-label="close"
                            onClick={() => setMostrarAlerta(false)}>
                                X
                        </button>
                    </div>

                </div>

                <div className="p-3 bg-white rounded-b-lg break-words text-gray-700" >{mensaje}</div>

        </div>

         }
         </>
    )
}

export default Alert