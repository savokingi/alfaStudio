import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Calculator from './components/Calculator';
{/*import Pricing from './components/Pricing';*/}
{/*import OfferBanner from './components/OfferBanner';*/}
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050508] text-[#EDEDED] selection:bg-amber-400 selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Works />
          <Calculator />
          {/*<Pricing />*/}
          {/*<OfferBanner />*/}
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
