import Image from "next/image";
import Navbar from "./_components/navbar";
import HeroSection from "./_components/hero-section";
import Service from "./_components/service";
import ContactUs from "./_components/contact-us";
import Blog from "./_components/blog";
import Statics from "./_components/statics";
import Footer from "./_components/footer";
import Testimonal from "./_components/testimonal";

export default function Home() {
  return (
    <>
  <Navbar />
  <HeroSection />
  <Service />
  <ContactUs />
  <Blog />
  <Statics />
  <Testimonal />
  <Footer />
</>

  );
}
