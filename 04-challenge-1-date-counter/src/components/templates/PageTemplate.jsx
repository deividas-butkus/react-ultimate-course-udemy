import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageTemplate;
