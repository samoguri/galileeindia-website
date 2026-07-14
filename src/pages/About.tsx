import { BookOpen, Church, HandHeart, Sparkles } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import founder from "../assets/founder.jpg";

function SectionEyebrow({
  icon: Icon,
  label,
}: {
  icon: typeof BookOpen;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-900">
        <Icon size={20} />
      </span>
      <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
        {label}
      </span>
    </div>
  );
}

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-center text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm font-semibold tracking-widest text-blue-200 uppercase mb-4">
            Our Story
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Galilee Prayer Fellowship
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Serving Christ and sharing His love in Visakhapatnam for over 50 years.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">

          {/* Our Beginning */}

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">

            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left Column */}

              <div>

                <SectionEyebrow icon={Sparkles} label="How It Started" />

                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Our Beginning
                </h2>

                <p className="text-gray-700 leading-8 mb-6">
                  About 50 years ago, God led the family of
                  <strong> Dr. Prabhudas Oguri & Samadanam Oguri</strong> to this
                  coastal area of Visakhapatnam, Andhra Pradesh, India. At that
                  time, it was a lonely and sparsely populated place. There
                  were no residential houses nearby—only a few fishermen's
                  huts on one side and a traditional village several miles
                  away on the other.
                </p>

                <p className="text-gray-700 leading-8 mb-6">
                  The people living in the surrounding communities had little
                  knowledge of the true and living God. Many were deeply
                  rooted in superstition and idol worship, offering animal
                  sacrifices and carrying idols in long processions
                  accompanied by dancing and drums. Fear of demons and evil
                  spirits was widespread, and many people had never
                  experienced the hope and everlasting love found in the Lord
                  Jesus Christ.
                </p>

                <p className="text-gray-700 leading-8">
                  Moved with compassion for these people, Bro. Prabhudas and
                  his family began praying faithfully for them. Over the
                  years, God answered those prayers by bringing together a
                  few families to worship Him every Sunday. What began as a
                  small gathering of believers gradually grew into
                  <strong> Galilee Prayer Fellowship.</strong>
                </p>

              </div>

              {/* Right Column */}

              <div>

                <img
                  src={founder}
                  alt="Dr. Oguri Prabhudas Oguri & Samadanam Oguri"
                  className="rounded-2xl shadow-xl ring-4 ring-blue-50 w-full aspect-[4/5] object-cover"
                />

                <div className="text-center mt-6">

                  <h3 className="text-2xl font-bold text-blue-900">
                    Dr. Oguri Prabhudas Oguri & Samadanam Oguri
                  </h3>

                  <p className="text-gray-600 italic mb-3">
                    Founding Pastors
                  </p>

                  <p className="text-gray-700 leading-7">
                    A faithful servant of God whose life and ministry laid the
                    spiritual foundation of Galilee Prayer Fellowship. Through
                    prayer, unwavering faith, and a deep burden for the people
                    of Visakhapatnam, God used him to establish a church that
                    continues to proclaim the Gospel of Jesus Christ today.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Birth of the Church */}

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">

            <SectionEyebrow icon={Church} label="Founding" />

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              The Birth of the Church
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              This humble fellowship became the first church in the area to
              faithfully proclaim the Gospel of Jesus Christ. Since its
              beginning, the church has remained committed to regular
              worship, fervent prayer, the faithful teaching of God's Word,
              and reaching surrounding communities with the love of Christ.
            </p>

            <p className="text-gray-700 leading-8">
              By God's grace, Galilee Prayer Fellowship has continued to grow
              while remaining firmly rooted in biblical truth and faithful
              Gospel ministry.
            </p>

          </div>

          {/* Outreach */}

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">

            <SectionEyebrow icon={BookOpen} label="Outreach" />

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Children's Ministry
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Every Sunday evening we conduct a Sunday School in
              <strong> Peda Jalaripeta</strong>, where around 30–40 children
              regularly gather to hear Bible stories, learn God's Word, sing
              songs, and enjoy Christian fellowship.
            </p>

            <p className="text-gray-700 leading-8">
              During school vacations we also conduct a Vacation Bible
              School, providing children with an opportunity to hear the
              Gospel in a joyful and engaging environment. We earnestly
              request your prayers for this ministry, that many young hearts
              may come to know and trust the Lord Jesus Christ.
            </p>

          </div>

          {/* Continuing the Mission */}

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">

            <SectionEyebrow icon={HandHeart} label="Today" />

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Continuing the Mission
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Over the years, the once-deserted area has developed into one
              of the largest residential neighborhoods in Visakhapatnam. The
              nearby fishing communities have also grown significantly.
            </p>

            <p className="text-gray-700 leading-8 mb-8">
              Today, Galilee Prayer Fellowship continues to carry a burden
              for the spiritual needs of both the residents of Lawsons Bay
              Colony and the surrounding fishing communities. Along with
              sharing the Gospel, we seek to demonstrate Christ's love by
              extending practical help to underprivileged families whenever
              possible.
            </p>

            <blockquote className="border-l-4 border-blue-900 bg-blue-50 rounded-r-xl px-6 py-5 text-blue-900 font-semibold text-lg leading-8">
              By God's grace, we remain committed to proclaiming the Good
              News of Jesus Christ, nurturing believers, serving our
              community, and making His love known to future generations.
            </blockquote>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
