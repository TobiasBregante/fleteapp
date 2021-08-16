import Link from 'next/link'

const Header = () => {    
    return(
        <>
        <header className="row">
            <nav className="navbar navbar-expand-lg navbar-dark col-12">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FleteApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link active" aria-current="page">Inicio</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#acciones-rapidas">
                                    <a className="nav-link">Atajos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#calcular-precios">
                                    <a className="nav-link">Calcular precios</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#mesa-de-ayuda">
                                    <a className="nav-link">Mesa de ayúda</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/dashboard'>
                                    <a className='nav-link'>Ingresar</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header