import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Footer />
    </>
  );
}

export default Home;