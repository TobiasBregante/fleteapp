import axios from 'axios'
import { useEffect, useState } from 'react';

const ActionsFast = () => {
    const
    [reparts, setReparts] = useState(false),
    [delivery, setDelivery] = useState(false),
    [movings, setMovings] = useState(false),
    [transfers, setTransfers] = useState(false),
    [latestData, setLatestData] = useState({});

    const handlerViewActionButtons = async () => {
        const data = await (await axios.get(`${process.env.SERVER_URL}/v1/state-services`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })).data
        setLatestData({
            reparts: data?.reparts,
            delivery: data?.delivery,
            movings: data?.movings,
            transfers: data?.transfers
        })
        
        setReparts(data?.reparts)
        setDelivery(data?.delivery)
        setMovings(data?.movings)
        setTransfers(data?.transfers)
    }

    useEffect(() => {
        handlerViewActionButtons()
        setInterval(handlerViewActionButtons, 5000)
    }, [])

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
                    <button 
                        onClick={Moving} 
                        disabled={!movings ? true : false} 
                        type='button' 
                        className={`btn ${movings ? 'btn-primary' : 'btn-secondary'}`}>
                        {
                            !movings && <span className='badge bg-danger text-light d-block'>No disponible</span>
                        }
                        Minifletes
                    </button>
                </li>
                <li>
                    <button 
                        onClick={Reparts} 
                        disabled={!reparts ? true : false} 
                        type='button' 
                        className={`btn ${reparts ? 'btn-danger' : 'btn-secondary'}`}>
                        {
                            !reparts && <span className='badge bg-danger text-light d-block'>No disponible</span>
                        }
                        Repartos
                    </button>
                </li>
                <li>
                    <button 
                        onClick={Delivery} 
                        disabled={!delivery ? true : false} 
                        type='button' 
                        className={`btn ${delivery ? 'btn-warning' : 'btn-secondary'}`}>
                        {
                            !delivery && <span className='badge bg-danger text-light d-block'>No disponible</span>
                        }
                        Deliverys
                    </button>
                </li>
                <li>
                    <button 
                        onClick={Translate} 
                        disabled={!transfers ? true : false} 
                        type='button' 
                        className={`btn ${transfers ? 'btn-info' : 'btn-secondary'}`}>
                        {
                            !transfers && <span className='badge bg-danger text-light d-block'>No disponible</span>
                        }
                        Traslados
                    </button>
                </li>
            </ul>
        </article>
        </>
    )
}

export default ActionsFast