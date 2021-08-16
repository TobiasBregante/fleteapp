import Layout from '../../components/layout/_index'
import DashboardComponent from '../../components/dashboard'

const Dashboard = () => {
    return (
        <Layout titlePage='Dashboard | FleteApp'>
            <article className="row contain">
                <DashboardComponent/>
            </article>
        </Layout>
    )
}

export default Dashboard