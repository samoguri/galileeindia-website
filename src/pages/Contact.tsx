import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">

          {/* Page Title */}

          <h1 className="text-5xl font-bold text-blue-900 text-center mb-4">
            Contact Us
          </h1>

          <p className="text-center text-xl text-gray-600 mb-16">
            We'd love to welcome you to Galilee Prayer Fellowship.
          </p>

          {/* Contact Cards */}

          <div className="grid md:grid-cols-2 gap-8">

            {/* Church Information */}

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Church Information
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="font-semibold text-xl text-blue-800 mb-2">
                    📍 Address
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Galilee Prayer Fellowship
                    <br />
                    Ground Floor, Galilee Enclave
                    <br />
                    D.No. 4-61-15
                    <br />
                    Lawsons Bay Colony
                    <br />
                    Visakhapatnam – 530017
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-blue-800 mb-2">
                    📞 Phone
                  </h3>

                  <a
                    href="tel:+919390097125"
                    className="text-blue-700 hover:underline"
                  >
                    +91 93900 97125
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-blue-800 mb-2">
                    📧 Email
                  </h3>

                  <a
                    href="mailto:galileeindia@gmail.com"
                    className="text-blue-700 hover:underline"
                  >
                    galileeindia@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-blue-800 mb-2">
                    ▶ YouTube
                  </h3>

                  <a
                    href="https://www.youtube.com/@galileeindia3736"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 hover:underline"
                  >
                    youtube.com/@galileeindia3736
                  </a>
                </div>

              </div>

            </div>

            {/* Weekly Services */}

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Weekly Services
              </h2>

              <table className="w-full">

                <tbody>

                  <tr className="border-b">
                    <td className="py-4 font-semibold">
                      Sunday Worship
                    </td>

                    <td className="py-4 text-right">
                      10:30 AM – 12:30 PM
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-4 font-semibold">
                      Sunday School
                    </td>

                    <td className="py-4 text-right">
                      11:30 AM – 12:30 PM
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-semibold">
                      Saturday Fasting Prayer
                    </td>

                    <td className="py-4 text-right">
                      7:30 PM – 9:00 PM
                    </td>

                  </tr>


                  <tr>
                    <td className="py-4 font-semibold">
                      Friday Ladies Prayer Meeting
                    </td>

                    <td className="py-4 text-right">
                      11:00 AM – 1:00 PM
                    </td>
                    
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* Google Map */}

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">

            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Find Us
            </h2>

            <div className="rounded-xl overflow-hidden">

              <iframe
                src="https://www.google.com/maps?q=Galilee+Prayer+Fellowship+Lawsons+Bay+Colony+Visakhapatnam&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Galilee Prayer Fellowship Location"
              ></iframe>

            </div>

            <div className="text-center mt-8">

              <a
                href="https://maps.app.goo.gl/zWYu3LqcEcNnCawV8"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                📍 Get Directions
              </a>

            </div>

          </div>

          {/* Welcome Message */}

          <div className="bg-white rounded-2xl shadow-lg p-10 mt-12 text-center">

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              You're Always Welcome
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              Whether you're exploring the Christian faith, looking for a church
              home, or simply seeking prayer, we warmly invite you to worship
              with us at Galilee Prayer Fellowship.
            </p>

            <p className="text-lg text-gray-700 leading-8 mt-6">
              We look forward to welcoming you and sharing the love of Jesus
              Christ with you and your family.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;