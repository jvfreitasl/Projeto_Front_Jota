import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";

const ProductListingPage = () => {
  return (
    <>
      <div className="flex flex-column min-h-screen">
        {/* Header */}
        <section style={{ backgroundColor: "#F9F8FE", paddingRight: "11rem" }} className="flex justify-content-end">
          <ProductListing />
        </section>
        <section className="mt-auto">
          <Footer />
        </section>
      </div>
    </>
  );
};
export default ProductListingPage;
