import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Header from "components/services/Header";
import CasesList from "components/services/CasesList";
import Heading from "components/services/Heading";
import { useEffect } from "react";

function Servicios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="pt-28"></div>
      <Header />
      <div className="pt-28"></div>
      <Heading />
      <CasesList />
      <Footer />
    </Layout>
  );
}
export default Servicios;
