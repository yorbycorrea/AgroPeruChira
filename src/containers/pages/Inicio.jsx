import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Header from "components/home/Header";
import Stories from "components/home/Stories";
import Certificaciones from "components/home/Certificaciones";
//import { Helmet } from "react-helmet-async";

import { useEffect } from "react";
import UseCases from "components/home/UseCases";
import CTA from "components/home/CTA";

function Inicio() {
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

        <CTA />
      </div>
      <Footer />
    </Layout>
  );
}
export default Inicio;
