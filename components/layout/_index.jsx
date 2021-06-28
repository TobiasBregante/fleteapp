import Head from 'next/head'
import Footer from './_footer'
import Header from './_header'
import Script from 'next/script'

const Layout = ({ titlePage, children }) => {
    return(
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{ titlePage }</title>
            <meta name="description" content="Llegó la app de delivery y fletes más popular a la argentina. Hacé tu delivery en un instante" />
            <meta name="title" content="Hacé tu pedido | FleteApp"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://fleteapp.herokuapp.com/"/>
            <meta property="og:title" content="Hacé tu pedido | FleteApp"/>
            <meta property="og:description" content="Llegó la app de delivery y fletes más popular a la argentina. Hacé tu delivery en un instante"/>
            <meta property="og:image" content="https://fleteapp.herokuapp.com/img/banner-box.jpg"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://fleteapp.herokuapp.com/"/>
            <meta property="twitter:title" content="Hacé tu pedido | FleteApp"/>
            <meta property="twitter:description" content="Llegó la app de delivery y fletes más popular a la argentina. Hacé tu delivery en un instante"/>
            <meta property="twitter:image" content="https://fleteapp.herokuapp.com/img/banner-box.jpg"/>
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                crossOrigin="anonymous"
            />
        </Head>
        <Script 
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossOrigin="anonymous"
        />
        <main className="container-fluid">
            <Header/>
            { children }
            <Footer/>
        </main>
        </>
    )
}

export default Layout