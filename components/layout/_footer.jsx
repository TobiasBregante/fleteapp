import { useEffect, useState } from "react"

const Footer = () => {
    const [propsWindow, setPropsWindow] = useState()

    useEffect(() => setPropsWindow(window), [])

    return(
        <>
        <footer className="row">
            <article className="col-12">
                <ul>
                    <li>Copyright &copy; reserved {  propsWindow && propsWindow.location.hostname } { (new Date()).getFullYear() } </li>
                    <li>Buenos Aires (CABA), Argentina</li>
                    <li>
                        Powered by 
                        <a 
                            href="https://nezzed.com" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <span> Nezzed.com</span>
                        </a>
                    </li>
                </ul>
            </article>
        </footer>
        </>
    )
}

export default Footer