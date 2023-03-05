/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactPlayer from "react-player";
import QuickView from "../../../../components/QuickView/QuickView";
import background_video from "../../../../assets/background-video/background.mp4";
import { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="flex justify-center item-center h-full w-full bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="flex items-center justify-center relative w-full h-[100vh] overflow-hidden">
        <div className="absolute top-0 w-full h-full z-[-1]">
          <video autoPlay loop muted src={background_video} type="video/mp4" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-0"></div>
        <div className="flex w-full h-full justify-center items-center z-10">
          <div className="text-center">
            <div className="mb-4">
              <h1 className="uppercase font-acumin font-bold text-6xl text-white leading-[4.8rem] not-italic">
                FILMPRODUKTION
              </h1>
            </div>
            <div className="flex justify-between gap-8 mb-8">
              <p className="font-[275] font-acumin text-[25px] text-white not-italic">
                En digital mediabyrå med fokus på engagerande filmer <br />
                för spridning & annonsering på sociala medier
              </p>
            </div>
            <div>
              <button
                class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow"
                onClick={() => setOpen(true)}
              >
                <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">
                  Snacka content
                </span>
              </button>
            </div>
          </div>
        </div>
        <QuickView open={open} setOpen={setOpen} />
      </div>
    </section>
  );
}

export default Hero;
