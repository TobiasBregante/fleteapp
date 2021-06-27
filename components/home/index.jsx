import Banner from '../banner.component'
import ActionsFast from '../actionsFast.component'
import HelpDesk from '../helpDesk.component'
import CalcPrice from '../calcPrice.component'

const Home = () => {
    return(
        <>
        <Banner img='img/banner-box.jpg'>
            <article className="col-12 col-sm-12 col-lg-5 col-xl-5 contain-titles-banner">
                <p className='title-banner'>
                    <i>Llegamos!</i>
                </p>
                <p className='title-banner subtitle-banner'>
                    FleteApp. La App de envíos, ahora disponible en tu país.
                </p>
            </article>
        </Banner>
        <ActionsFast/>
        <CalcPrice/>
        <HelpDesk/>
        </>
    )
}

export default Home