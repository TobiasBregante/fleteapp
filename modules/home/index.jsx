import Layout from '../../components/layout/_index'
import HomeComponent from '../../components/home/index'

const Home = () => (
    <Layout titlePage='Hacé tu pedido | FleteApp'>
        <article className="row contain">
            <HomeComponent/>
        </article>
    </Layout>
)

export default Home