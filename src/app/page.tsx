import Hero from "@/pageCompo/hero/Hero";
import Features from "@/pageCompo/features/Features";
import Blog from "@/pageCompo/blog/Blog";
import Footer from "@/pageCompo/footer/Footer";
import About from "@/pageCompo/about/About";
import Fnq from "@/pageCompo/fnq/Fnq";
export default function Home() {
  return (
   <div>
    

    
    {/* hero */}
    <Hero/>
    {/* features */}
    <Features/>
    {/* fnq */}
    {/* blog */}
    <Blog/>
    {/* about */}
    <About/>
    <Fnq/>
    {/* footer */}
    <Footer/>
   </div>
  );
}
