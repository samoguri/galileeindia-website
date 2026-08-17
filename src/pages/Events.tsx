import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Events from "../components/home/Events";

function EventsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-blue-900 text-center mb-4">
            Church Events
          </h1>

          <p className="text-center text-xl text-gray-600 mb-12">
            Join us for worship services, prayer meetings, conferences, and special occasions throughout the year.
          </p>

          <Events />

        </div>

      </section>

      <Footer />
    </>
  );
}

export default EventsPage;