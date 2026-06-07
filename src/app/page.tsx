import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";
import { About } from "./Main/About/About";
import { Portfolio } from "./Main/Portfolio/Portfolio";
import Service from "./Main/Service/Service";


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Service />
      <Footer />
    </>
  );
}
