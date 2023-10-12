import Comunicate from "components/contact/Comunicate";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="pt-28"></div>
      <Comunicate />
      <Footer />
    </Layout>
  );
}
export default Contacto;
