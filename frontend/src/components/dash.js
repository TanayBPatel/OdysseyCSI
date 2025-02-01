
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from "./spline";
import EventServices from "./event";
import myImage from './welcome.png';
import section1 from './section1.png';
import section2 from './section2.png';
import section3 from './section3.png';
import section4 from './section4.png';
import Footer from "./balla";

const Gsap = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });

      // **Horizontal Scroll Effect**
      let contentWidth = document.querySelector(".content").scrollWidth;
      gsap.to(".pinned-section .content", {
        x: () => -contentWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: ".pinned-section",
          start: "top top",
          end: `+=${contentWidth}`, // Scrolls until full width is revealed
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      {/* Intro Section */}
      <div
        id="intro-slider"
            className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight bg-cover bg-center"
            style={{
                backgroundImage: "url('https://raw.githubusercontent.com/prem-choithani23/Team-Ideators/refs/heads/master/images/canteen_demo4.png')",
            }}
            >
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 drop-shadow-lg" id="title-1">
    Best Food
    </h1>
    <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 drop-shadow-lg" id="title-2">
    For Your
    </h1>
    <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 drop-shadow-lg" id="title-3">
    Taste
    </h1>

        </div>

        <div className="h-screen flex justify-center items-center relative bg-gray-950">
  <img src={myImage} alt="Description" className="absolute inset-0 h-full w-full object-cover" />
  <h1 id="welcome" className="text-9xl font-bold text-b-100 font-spaceGrotesk z-10 absolute left-[2rem]">
    Welcome
  </h1>
</div>



      {/* Horizontal Scroll Section */}
      <section className="pinned-section h-screen flex items-center overflow-hidden bg-gray-800">
        <div className="content flex gap-10 w-[300vw]">
          <div className="w-screen h-screen flex items-center justify-center text-white text-6xl bg-red-500">
          <img 
    src={section1} 
    alt="Background" 
    
  />
            
          </div>
          <div className="w-screen h-screen flex items-center justify-center text-white text-6xl bg-blue-500">
          <img 
    src={section3} 
    alt="Background" 
  />

          </div>
          <div className="w-screen h-screen flex items-center justify-center text-white text-6xl bg-green-500">
          <img 
    src={section3} 
    alt="Background" 
  />
          </div>
        </div>
      </section>

    
      <section className="relative h-screen flex justify-center items-center bg-gray-700 text-white text-6xl">
  <Footer/>
 
</section>

    </div>
  );
};

export default Gsap;
