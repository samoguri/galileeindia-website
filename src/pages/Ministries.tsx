import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServiceTimes from "../components/home/ServiceTimes";

function Ministries() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-blue-900 text-center mb-4">
            Ministries
          </h1>

          <p className="text-center text-xl text-gray-600 mb-12">
            Worship, prayer, Bible teaching, and serving our community.
          </p>

          <ServiceTimes layout="list" />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Ministries;