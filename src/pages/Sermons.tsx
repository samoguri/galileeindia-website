import { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getVideos } from "../services/youtube";

function Sermons() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [nowPlayingId, setNowPlayingId] = useState<string | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);

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
  const featured =
    videos.find((video) => video.id.videoId === nowPlayingId) ?? latest;

  function playVideo(videoId: string) {
    setNowPlayingId(videoId);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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

          {featured && (
            <div
              ref={playerRef}
              className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20"
            >

              <div className="aspect-video w-full bg-black">
                <iframe
                  key={featured.id.videoId}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${featured.id.videoId}${
                    nowPlayingId ? "?autoplay=1" : ""
                  }`}
                  title={featured.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-10 text-center">

                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  {featured.snippet.title}
                </h2>

                <p className="text-gray-500">
                  Published on{" "}
                  {new Date(featured.snippet.publishedAt).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>

              </div>

            </div>
          )}

          {/* Previous Sermons */}

          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Previous Sermons
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {previous.map((video) => (

              <button
                key={video.id.videoId}
                onClick={() => playVideo(video.id.videoId)}
                className={`text-left bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 ${
                  video.id.videoId === nowPlayingId
                    ? "ring-2 ring-blue-900"
                    : ""
                }`}
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

                  <span className="text-red-600 font-semibold">
                    ▶ Watch Sermon
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Sermons;
