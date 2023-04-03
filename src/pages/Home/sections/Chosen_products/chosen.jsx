/* eslint-disable jsx-a11y/alt-text */
import defa from "./../../../../assets/images/dashboard/kunder/defa.jpg";
import jackie from "./../../../../assets/images/dashboard/kunder/jackie.jpg";
import cotton from "./../../../../assets/images/dashboard/kunder/cotton.jpg";
import kia from "./../../../../assets/images/dashboard/kunder/kia.jpg";
import danads from "./../../../../assets/images/dashboard/kunder/danads.jpg";
import hermes from "./../../../../assets/images/dashboard/kunder/hermes.jpg";
import celsius from "./../../../../assets/images/dashboard/kunder/celsius.jpg";
import video1 from "../../../../assets/TopPage/1.mp4";
import video2 from "../../../../assets/TopPage/2.mp4";
import video3 from "../../../../assets/TopPage/3.mp4";
import { useRef } from "react";

function ChosenProducts() {
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  return (
    <section className="w-full hover:cursor-pointer flex h-full items-center justify-center flex-col">
      <div className="flex w-full h-full flex-col">
        <div className="flex w-full  grid flex-row grid-cols-3">
          <div className="w-full h-[90vh] overflow-hidden flex flex-col relative">
            <a href="/reklam">
            <video
              loop
              muted
              ref={videoRef}
              type="video/mp4"
              width="100%"
              onMouseOver={() => {
                videoRef.current?.play();
              }}
              onMouseOut={() => {
                videoRef.current?.pause();
              }}
            >
              <source src={video1} type="video/mp4" />
            </video>
            </a>
            <p className="font-bold text-[50px] text-white absolute left-[3%] top-[88%]">
              REKLAMFILM
            </p>
          </div>
          <div className="w-full h-[90vh] overflow-hidden flex flex-col relative">
          <a href="/eventfilm">
            <video
              loop
              muted
              ref={videoRef1}
              width="100%"
              type="video/mp4"
              onMouseOver={() => {
                videoRef1.current?.play();
              }}
              onMouseOut={() => {
                videoRef1.current?.pause();
              }}
            >
              <source src={video2} type="video/mp4" />
            </video>
            </a>
            <p className="font-bold text-[50px] text-white absolute left-[3%] top-[88%]">
              EVENTFILM
            </p>
          </div>
          <div className="w-full h-[90vh] overflow-hidden flex flex-col relative">
          <a href="/coporate">
            <video
              loop
              muted
              ref={videoRef2}
              type="video/mp4"
              width="100%"
              onMouseOver={() => {
                videoRef2.current?.play();
              }}
              onMouseOut={() => {
                videoRef2.current?.pause();
              }}
            >
              <source src={video3} type="video/mp4" />
            </video>
            </a>
            <p className="font-bold text-[50px] text-white absolute left-[3%] top-[88%]">
              CORPORATE
            </p>
          </div>
        </div>
    <div className="w-full flex flex-col justify-center items-center pt-[10rem] pb-[2rem]">
  <div className="w-[60%] grid grid-cols-4 gap-12">
  <div
  className="h-[131px] bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${defa})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
/>
<div
  className="h-[131px] bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${jackie})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
/>
<div
  className="h-[131px] bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${cotton})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
/>
<div
  className="h-[131px] bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kia})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
/>
</div></div>
<div className="w-full flex flex-col justify-center items-center pt-[0rem] pb-[2rem]">
  <div className="w-[60%] grid grid-cols-3 gap-2">
<div
  className="h-[131px] bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${danads})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
/>
<div
  className="h-[131px] bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${hermes})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
/>
<div
  className="h-[131px] bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${celsius})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
/>


  </div>
</div>
</div>
    </section>
  );
}

export default ChosenProducts;
