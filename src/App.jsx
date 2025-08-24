import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.05,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.05,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.1,
      x: "-50%",
      bottom: "-10%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  // Handler for Download Now button
  const handleDownloadClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="180"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-3deg] scale-100">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-6">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-10 h-2 bg-white"></div>
                  <div className="line w-6 h-2 bg-white"></div>
                  <div className="line w-3 h-2 bg-white"></div>
                </div>
                <h3 className="text-2xl -mt-[4px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen flex items-end">
              <img
                className="absolute select-none drag-none sky scale-100 rotate-[-5deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
                draggable="false"
              />
              <img
                className="absolute select-none drag-none scale-100 rotate-[-1deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
                draggable="false"
              />
              <div className="text text-white flex flex-col gap-2 absolute top-20 left-1/2 -translate-x-1/2 scale-100 rotate-[-3deg]">
                <h1 className="text-6xl leading-none -ml-15">grand</h1>
                <h1 className="text-6xl leading-none ml-25">theft</h1>
                <h1 className="text-6xl leading-none -ml-23">auto</h1>
              </div>
              <img
                className="absolute select-none drag-none character -bottom-1 left-1/2 -translate-x-1/2 scale-100 rotate-[-5deg] w-auto max-w-[40vw] h-auto max-h-[80vh] object-contain"
                src="./boybg.png"
                alt=""
                draggable="false"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 items-center">
                <i className="text-2xl ri-arrow-down-line"></i>
                <h3 className="text-lg font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[35px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none drag-none"
                src="./ps5.png"
                alt=""
                draggable="false"
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute select-none drag-none scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
                  src="./imag.png"
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="rg w-[30%] py-16">
                <h1 className="text-4xl">Still Running,</h1>
                <h1 className="text-4xl">Not Hunting</h1>
                <p className="mt-6 text-base font-[Helvetica_Now_Display]">
                  Experience the next chapter in the Grand Theft Auto series.
                  Explore a vibrant open world, complete thrilling missions, and
                  immerse yourself in an epic story.
                </p>
                <p className="mt-2 text-base font-[Helvetica_Now_Display]">
                  Discover new characters, stunning locations, and innovative
                  gameplay features that push the boundaries of what's possible
                  in an action-adventure game.
                </p>
                <p className="mt-6 text-base font-[Helvetica_Now_Display]">
                  Join millions of players worldwide and be part of the most
                  anticipated release of the decade. Are you ready to make your
                  mark in the city?
                </p>
                <button
                  className="bg-yellow-500 px-6 py-6 text-black mt-6 text-2xl cursor-pointer hover:bg-yellow-400"
                  onClick={handleDownloadClick}
                  style={{ cursor: "pointer" }}
                >
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
