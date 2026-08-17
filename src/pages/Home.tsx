import Navbar from "../components/layout/Navbar";
import BreakingNews from "../components/home/BreakingNews";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import ServiceTimes from "../components/home/ServiceTimes";
import UpcomingEvents from "../components/home/UpcomingEvents";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <BreakingNews />
      <Navbar />
      <Hero />
      <Welcome />
      <ServiceTimes />
      <UpcomingEvents />
      <Footer />
    </>
  );
}

export default Home;