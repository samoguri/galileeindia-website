import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import JoinUsForm from "../components/joinus/JoinUsForm";

function JoinUs() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-900">
              Join Our Church Family
            </h1>

            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to get to know you, pray with you, and help you grow in
              your walk with Jesus Christ. Please complete the form below and
              one of our pastoral team members will be delighted to connect with
              you.
            </p>
          </div>

          {/* Join Us Form */}
          <JoinUsForm />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default JoinUs;