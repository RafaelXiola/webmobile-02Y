import Header from "./components/Header";
import Hero from "./components/Hero";
import Depoimentos from "./components/Depoimentos";
import Estatisticas from "./components/Estatisticas";
import Servicos from "./components/Servicos";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Depoimentos />
      <Estatisticas />
      <Servicos />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
