import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProofBar from "@/components/ProofBar";
import Bento from "@/components/Bento";
import TheWhy from "@/components/TheWhy";
import Journey from "@/components/Journey";
import Arenas from "@/components/Arenas";
import Gallery from "@/components/Gallery";
import Reels from "@/components/Reels";
import Recognition from "@/components/Recognition";
import Impact from "@/components/Impact";
import BoxSection from "@/components/BoxSection";
import Partner from "@/components/Partner";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

/**
 * Homepage narrative spine (passion-led):
 * Hero → Proof → Why → Journey → Arenas → Recognition → Impact → Box → Connect
 */
export default function Home() {
  return (
    <>
      <Intro />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ProofBar />
        <TheWhy />
        <Bento />
        <Reels />
        <Journey />
        <Arenas />
        <Gallery />
        <Recognition />
        <Impact />
        <BoxSection />
        <Partner />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
