import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import ServiceTimes from "../components/home/ServiceTimes";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <ServiceTimes />
      <Footer />
    </>
  );
}

export default Home;