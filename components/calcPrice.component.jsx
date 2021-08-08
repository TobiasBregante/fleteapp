import { useState } from "react"

const CalcPrice = () => {
    const [frmTranslatesOrDelivery, setFrmTranslatesOrDelivery] = useState(false)
    const [frmMoving, setFrmMoving] = useState(false)
    const [reparts, setReparts] = useState(false)
    const [boxAmountPerBox, setBoxAmountPerBox] = useState(200)
    const [deliveryAmountPerKm, setDeliveryAmountPerKm] = useState(160)
    const [repartsPerBoxCABA, setRepartsPerBoxCABA] = useState(450)
    const [repartsPerBoxGBA, setRepartsPerBoxGBA] = useState(600)
    const [resultCalc, setResultCalc] = useState(0)
    const [resultCalcGBA, setResultCalcGBA] = useState(0)
    const [viewResult, setViewResult] = useState(false)

    const onChangeSelectOption = e => {
        setViewResult(false)
        setResultCalc(0)
        setResultCalcGBA(0)
        const option = {
            delivery: () => {
                setFrmTranslatesOrDelivery(true)
                setReparts(false)
                setFrmMoving(false)
            },
            moving: () => {
                setFrmTranslatesOrDelivery(false)
                setReparts(false)
                setFrmMoving(true)
            },
            reparts: () => {
                setReparts(true)
                setFrmMoving(false)
                setFrmTranslatesOrDelivery(false)
            }
        }
        option[e.target.value]()
    }

    const handlerCalcBoxAmount = e => {
        const resultCalc = e.target.value * boxAmountPerBox
        e.target.value.length < 1 && setViewResult(false)
        setResultCalc(resultCalc)
    },
    handlerCalcDelivery = e => {
        const resultCalc = e.target.value * deliveryAmountPerKm
        e.target.value.length < 1 && setViewResult(false)
        setResultCalc(resultCalc)
    },
    handlerCalcRepart = e => {
        const resultCalc = e.target.value * repartsPerBoxCABA,
        resultCalcGBA = e.target.value * repartsPerBoxGBA
        e.target.value.length < 1 && setViewResult(false)
        setResultCalc(resultCalc)
        setResultCalcGBA(resultCalcGBA)
    },
    onSubmit = e => {
        e.preventDefault()
        setViewResult(true)
    }

    return(
        <>
        <article className="col-12 col-sm-12 col-lg-6 col-xl-6 calcContain" id='calcular-precios'>
            <p className='calcTitle'>Calcular precio</p>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                className="bi bi-calculator" 
                viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
            </svg>
            <small className='d-block'>Seleccione una opción</small>
            <select onChange={onChangeSelectOption} className='form-control mb-3'>
                <option defaultValue={null} disabled selected>Seleccione una opción</option>
                <option value="delivery">Traslados y delivery</option>
                <option value="moving">Mini Fletes</option>
                <option value="reparts">Repartos</option>
            </select>
            {
                frmTranslatesOrDelivery && (
                    <>
                    <form onSubmit={onSubmit}>
                        <small>Esto aplica a traslados y delivery</small>
                        <span className="calcTitle badge bg-primary">${deliveryAmountPerKm}/Km en CABA</span>
                        <input onChange={handlerCalcDelivery} className='form-control' type="number" name="km" placeholder='Ingrese los km'/>
                        <input className='d-block btn btn-warning col-12' type="submit" value="Calcular"/>
                    </form>
                    {viewResult && resultCalc > 0 && <p className='resultPrice text-primary'>${resultCalc} (CABA)</p>}
                    {viewResult && resultCalcGBA > 0 && <p className='resultPrice text-primary'>${resultCalcGBA} (GBA)</p>}
                    {viewResult && resultCalc > 0 && <p className='resultPrice text-primary'>a pagar en efectivo o débito</p>}
                    </>
                )
            }
            {
                frmMoving && (
                    <>
                    <form onSubmit={onSubmit}>
                        <small>Esto aplica a mini fletes</small>
                        <span className="calcTitle badge bg-primary">${boxAmountPerBox}/Km</span>
                        <input onChange={handlerCalcBoxAmount} className='form-control' type="number" name="boxs" placeholder='Ingrese los km'/>
                        <input className='d-block btn btn-warning col-12' type="submit" value="Calcular"/>
                    </form>
                    {viewResult && <p className='resultPrice text-primary'>${resultCalc} a pagar en efectivo o débito</p>}
                    </>
                )
            }
            {
                reparts && (
                    <>
                    <form onSubmit={onSubmit}>
                        <small>Esto aplica a repartos</small>
                        <span className="calcTitle badge bg-primary">${repartsPerBoxCABA}/caja (CABA)</span>
                        <span className="calcTitle badge bg-primary">${repartsPerBoxGBA}/caja (GBA)</span>
                        <input onChange={handlerCalcRepart} className='form-control' type="number" name="boxs" placeholder='Ingrese cant. cajas'/>
                        <input className='d-block btn btn-warning col-12' type="submit" value="Calcular"/>
                    </form>
                    {viewResult && <p className="resultPrice text-primary">a pagar en efectivo o débito</p>}
                    {viewResult && <p className='resultPrice text-primary'>${resultCalc} (CABA)</p>}
                    {viewResult && <p className='resultPrice text-primary'>${resultCalcGBA} (GBA)</p>}
                    </>
                )
            }
            <hr/>
        </article>
        </>
    )
}

export default CalcPrice