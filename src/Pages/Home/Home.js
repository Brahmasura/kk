import BasicLayout from '../../Layouts/BasicLayout/BasicLayout'
import Footer from '../../Layouts/BasicLayout/Footer/Footer'
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <>
            <BasicLayout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="shreyas" content="Place the meta description text here." />
                    <title>KK</title>
                    <link rel="canonical" href="/" />
                </Helmet>
                <div style={{ paddingRight: '0.75rem', paddingLeft: '0.75rem' }}>
                    <section id="home_section">
                Home
                </section>
                </div>
                <Footer />
            </BasicLayout>
        </>
    )
}
export default Home;