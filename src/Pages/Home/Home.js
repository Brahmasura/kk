import BasicLayout from "../../Layouts/BasicLayout/BasicLayout";
import Footer from "../../Layouts/BasicLayout/Footer/Footer";
import { Helmet } from "react-helmet";
import Intro from "./Intro/Intro";
import Packaging from "./Packaging/Packaging";
import Products from "./Products/Products";

const Home = () => {
  return (
    <>
      <BasicLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="shreyas"
            content="Place the meta description text here."
          />
          <title>KK</title>
          <link rel="canonical" href="/" />
        </Helmet>
        <div>
          {/* <section id="home_section">
            <Intro />
          </section> */}

          <Intro/>
          <Packaging/>
          <Products/>
          
        </div>
        
      </BasicLayout>
    </>
  );
};
export default Home;
