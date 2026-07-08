import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getVideos } from "../services/youtube";

function Sermons() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos()
      .then((data) => setVideos(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center text-xl">
          Loading sermons...
        </div>

        <Footer />
      </>
    );
  }

  const latest = videos[0];
  const previous = videos.slice(1);

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-blue-900">
            Sermons
          </h1>

          <p className="text-center text-gray-600 mt-4 mb-16">
            Watch our latest messages and grow together through God's Word.
          </p>

          {/* Featured Sermon */}

          {latest && (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20">

              <img
                src={latest.snippet.thumbnails.high.url}
                alt={latest.snippet.title}
                className="w-full max-h-[500px] object-cover"
              />

              <div className="p-10">

                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  {latest.snippet.title}
                </h2>

                <p className="text-gray-500 mb-8">
                  Published on{" "}
                  {new Date(latest.snippet.publishedAt).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>

                <a
                  href={`https://www.youtube.com/watch?v=${latest.id.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  ▶ Watch on YouTube
                </a>

              </div>

            </div>
          )}

          {/* Previous Sermons */}

          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Previous Sermons
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {previous.map((video) => (

              <div
                key={video.id.videoId}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
              >

                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="w-full"
                />

                <div className="p-5">

                  <h3 className="font-semibold text-lg mb-3">
                    {video.snippet.title}
                  </h3>

                  <p className="text-gray-500 mb-5">
                    {new Date(video.snippet.publishedAt).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 font-semibold hover:underline"
                  >
                    ▶ Watch Sermon
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Sermons;