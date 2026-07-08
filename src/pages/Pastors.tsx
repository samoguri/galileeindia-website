import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import pastors from "../assets/pastors.png";

function Pastors() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-screen py-20">

        <div className="max-w-4xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-12">

            <h1 className="text-5xl font-bold text-blue-900">
              Our Pastors
            </h1>

            <p className="text-gray-600 text-xl mt-4">
              Faithfully serving Christ and His Church
            </p>

          </div>

          {/* Photo */}

          <div className="flex justify-center">

            <img
              src={pastors}
              alt="Pastors"
              className="w-72 rounded-2xl shadow-lg"
            />

          </div>

          {/* Name */}

          <div className="text-center mt-8">

            <h2 className="text-3xl font-bold text-blue-900">
              Ps. Sam Oguri &amp; Dr. Jaya Suma
            </h2>

            <p className="text-lg text-gray-500 mt-2">
              Lead Pastors
            </p>

          </div>

          {/* Biography */}

          <div className="bg-white rounded-2xl shadow-lg p-10 mt-12">

            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Our Story
            </h2>

            <div className="space-y-6 text-gray-700 leading-8">

              <p>
                After serving for over <strong>25 years in senior leadership roles in the corporate world</strong>, we responded to God's call to full-time ministry. We believe that every season of our lives was part of His preparation for serving His Kingdom.
              </p>

              <p>
                Our passion is to faithfully shepherd God's people, teach His Word, and share the Gospel of Jesus Christ. We are deeply convinced of our Lord's words:
                <em> "The harvest is plentiful, but the workers are few."</em>
              </p>

              <p>
                Therefore, we continually pray that God will raise up laborers for His harvest, and we are grateful that He has chosen to use us as part of fulfilling the <strong>Great Commission.</strong>
              </p>

              <p>
                It is our desire to see lives transformed by the power of the Gospel, believers equipped to grow in their faith, and disciples sent out to serve Christ wherever He leads. We consider it a privilege to serve the Lord and the church family He has entrusted to our care.
              </p>

            </div>

          </div>

          {/* Scripture */}

          <div className="bg-blue-900 text-white rounded-2xl p-8 mt-12">

            <h3 className="text-2xl font-bold text-center mb-6">
              Matthew 9:37–38
            </h3>

            <p className="italic text-center leading-8">
              "Then He said to His disciples,
              <br />
              'The harvest truly is plentiful,
              but the laborers are few.
              Therefore pray the Lord of the harvest
              to send out laborers into His harvest.'"
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Pastors;