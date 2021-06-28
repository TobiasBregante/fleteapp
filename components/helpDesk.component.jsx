import { useRef, useState } from "react"

const HelpDesk = () => {
    const [fullname, setFullname] = useState('')
    const [msj, setMsj] = useState('')
    
    const onChangeFullname = e => setFullname(e.target.value),
    onChangeMsj = e => setMsj(e.target.value),
    onSubmit = e => {
        e.preventDefault()
        const questionForWhatsApp = {
            fullname: fullname,
            msj: msj,
            number: 5491121795837,
            textSend: `${msj}. Mi nombre es ${fullname}`
        }
        window.open(`https://api.whatsapp.com/send?phone=${questionForWhatsApp.number}&text=${questionForWhatsApp.textSend}`, '_blank')
        setFullname('')
        setMsj('')
    }

    return(
        <>
        <article className="col-12 helpDeskContain" id='mesa-de-ayuda'>
            <p className='helpDeskTitle'>Mesa de ayúda</p>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChangeFullname}
                    className='form-control' 
                    type="text" name="fullname" 
                    placeholder='Nombre completo' 
                    value={fullname}
                />
                <textarea 
                    onChange={onChangeMsj}
                    className='form-control' 
                    name="msj" 
                    placeholder='Escriba su consulta' 
                    value={msj}
                />
                <input className='d-block m-auto col-12 btn btn-primary' type="submit" value='Enviar por WhatsApp'/>
            </form>
        </article>
        </>
    )
}

export default HelpDesk