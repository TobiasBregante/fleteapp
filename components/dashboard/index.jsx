import axios from 'axios'
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const
        [reparts, setReparts] = useState(false),
        [delivery, setDelivery] = useState(false),
        [movings, setMovings] = useState(false),
        [transfers, setTransfers] = useState(false),
        [userAuth, setUserAuth] = useState(false),
        [username, setUsername] = useState(''),
        [pdw, setPdw] = useState('');
    
    const handlerSubmitSigninUser = async e => {
        e.preventDefault()

        const data = await (await axios.post(`${process.env.SERVER_URL}/v1/auth/signin`,
            {
                username: username,
                pdw: pdw
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )).data

        console.log(data)
        data.credential ? setUserAuth(true) : setUserAuth(false)
        !data.credential && alert('Los datos son incorrectos. Ingrese los datos nuevamente')
        !data.credential && setUsername('')
        !data.credential && setPdw('')

        return data
    },
    handlerChangeUsername = e => setUsername(e.target.value),
    handlerChangePdw = e => setPdw(e.target.value)

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

        setReparts(data.reparts && data.reparts)
        setDelivery(data.delivery && data.delivery)
        setMovings(data.movings && data.movings)
        setTransfers(data.transfers && data.transfers)
    }

    useEffect(() => {
        userAuth && handlerViewActionButtons()
    }, [userAuth])

    const handlerClickAction = async updateThisService => {
        const updateThese = {
            reparts: (() => {
                setReparts(!reparts)
                return { reparts: !reparts }
            }),
            delivery: (() => {
                setDelivery(!delivery)
                return { delivery: !delivery }
            }),
            movings: (() => {
                setMovings(!movings)
                return { movings: !movings }
            }),
            transfers: (() => {
                setTransfers(!transfers)
                return { transfers: !transfers }
            })
        }

        const data = await (await axios.post(`${process.env.SERVER_URL}/v1/state-services`,
            {
                service: await updateThese[updateThisService]()
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )).data

        return data
    }

    return userAuth ? (
        <>
            <article className="col-12 containDashboardtitle">
                <h1>
                    Bienvenido al Panel de Gestión!
                </h1>
            </article>
            <article className='col-12 col-sm-12 col-lg-5 col-xl-5 m-auto'>
                <h2 className="text-secondary titleServicesDashboard">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-gear-wide-connected"
                        viewBox="0 0 16 16">
                        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                    </svg>
                    Estado y Manejo de Servicios
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-gear-wide-connected"
                        viewBox="0 0 16 16">
                        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                    </svg>
                </h2>
                <ul className='col-12 listBtnDashboard'>
                    <li>
                        <button
                            onClick={() => handlerClickAction('movings')}
                            type='button'
                            className={`btn ${movings ? 'btn-primary' : 'btn-secondary'}`}>
                            Minifletes {!movings && 'No disponible'}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlerClickAction('reparts')}
                            type='button'
                            className={`btn ${reparts ? 'btn-danger' : 'btn-secondary'}`}>
                            Repartos {!reparts && 'No disponible'}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlerClickAction('delivery')}
                            type='button'
                            className={`btn ${delivery ? 'btn-warning' : 'btn-secondary'}`}>
                            Deliverys {!delivery && 'No disponible'}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlerClickAction('transfers')}
                            type='button'
                            className={`btn ${transfers ? 'btn-info' : 'btn-secondary'}`}>
                            Traslados {!transfers && 'No disponible'}
                        </button>
                    </li>
                </ul>
                <p className='text-secondary textInfoServicesDashboard'>Haz click en el servicio que quiera modificar</p>
            </article>
        </>
    )
    : (
        <>
            <article className="col-12 containAuth p-0">
                <h1 className='titleAuth col-12'>Ingrese a su cuenta</h1>
                <form className='col-12 col-sm-12 col-lg-5 col-xl-5 m-auto' onSubmit={ handlerSubmitSigninUser }>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            onChange={ handlerChangeUsername }
                            value={ username }
                        />
                        <div id="emailHelp" className="form-text">En caso de ayuda, comuniquese a <a target='_blank' rel="noreferrer" href='mailto:nezzedsoft@gmail.com'>nezzedsoft@gmail.com</a>.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            onChange={ handlerChangePdw }
                            value={ pdw }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            </article>
        </>
    )
}

export default Dashboard