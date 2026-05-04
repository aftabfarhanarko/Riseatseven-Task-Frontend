import NavTop from "@/components/NavTop";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import BannerButtomMarque from "@/components/BannerButtomMarque";
import FeaturedWork from "@/components/FeaturedWork";
import OurServices from "@/components/OurServices";
import OurServicesButtomMarque from "@/components/OurServicesButtomMarque";
import Making from "@/components/Making";
import WhatsNew from "@/components/WhatsNew";
import Footer from "@/components/Footer";
import FullMarque from "@/components/FullMarque";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <NavTop />
      <NavBar />
      <main className="flex flex-col w-full bg-white dark:bg-black">
        <Banner />
        <BannerButtomMarque />
        <FeaturedWork />
        <OurServices />
        <OurServicesButtomMarque />
        <Making />
        <WhatsNew />
        <FullMarque />
      </main>
      <Footer />
    </div>
  );
}
