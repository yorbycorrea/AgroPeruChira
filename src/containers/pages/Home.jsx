import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Header from "components/home/Header";
import Stories from "components/home/Stories";
import Certificaciones from "components/home/Certificaciones";
import UseCases from "components/home/UseCases";
import CTA from "components/home/CTA";

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <Stories />
        <Certificaciones />
        <UseCases />

        <div className="pt-56"></div>
        <CTA />
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
