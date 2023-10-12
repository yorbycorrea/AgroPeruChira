import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Blog() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28"></div>
      Blog
      <Footer />
    </Layout>
  );
}
export default Blog;
