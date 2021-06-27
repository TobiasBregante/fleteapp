import Head from 'next/head'
import Footer from './_footer'
import Header from './_header'

const Layout = ({ titlePage, children }) => {
    return(
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{ titlePage }</title>
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                crossOrigin="anonymous"
            />
            <script 
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
                crossOrigin="anonymous"
            />
        </Head>
        <main className="container-fluid">
            <Header/>
            { children }
            <Footer/>
        </main>
        </>
    )
}

export default Layout