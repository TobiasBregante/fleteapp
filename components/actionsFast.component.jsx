const ActionsFast = () => {
    const Moving = () => {
        const questionForWhatsApp = {
            number: 5491121795837,
            textSend: 'Hola! Necesito un flete. ¿Estás disponible?'
        }
        window.open(`https://api.whatsapp.com/send?phone=${questionForWhatsApp.number}&text=${questionForWhatsApp.textSend}`, '_blank')
    },
    Translate = () => {
        const questionForWhatsApp = {
            number: 5491121795837,
            textSend: 'Hola! Necesito un traslado. ¿Estás disponible?'
        }
        window.open(`https://api.whatsapp.com/send?phone=${questionForWhatsApp.number}&text=${questionForWhatsApp.textSend}`, '_blank')
    },
    Delivery = () => {
        const questionForWhatsApp = {
            number: 5491121795837,
            textSend: 'Hola! Necesito un delivery. ¿Estás disponible?'
        }
        window.open(`https://api.whatsapp.com/send?phone=${questionForWhatsApp.number}&text=${questionForWhatsApp.textSend}`, '_blank')
    },
    Reparts = () => {
        const questionForWhatsApp = {
            number: 5491121795837,
            textSend: 'Hola! Necesito un reparto. ¿Estás disponible?'
        }
        window.open(`https://api.whatsapp.com/send?phone=${questionForWhatsApp.number}&text=${questionForWhatsApp.textSend}`, '_blank')
    }

    return(
        <>
        <article className="col-12 actionsFast" id='acciones-rapidas'>
            <p className='actionsFastTitle'>
                Acciones rápidas
                <span className='d-block'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        className="bi bi-asterisk" 
                        viewBox="0 0 16 16">
                        <path 
                            d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                    </svg>
                </span>
            </p>
            <ul className='col-12'>
                <li>
                    <input onClick={Moving} type='button' value='Minifletes' className='btn btn-primary'/>
                </li>
                <li>
                    <input onClick={Reparts} type='button' value='Repartos' className='btn btn-danger'/>
                </li>
                <li>
                    <input onClick={Delivery} type='button' value='Deliverys' className='btn btn-warning'/>
                </li>
                <li>
                    <input onClick={Translate} type='button' value='Traslados' className='btn btn-info'/>
                </li>
            </ul>
        </article>
        </>
    )
}

export default ActionsFast