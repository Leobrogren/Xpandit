/* eslint-disable jsx-a11y/alt-text */
import Film1 from "./../../../../assets/images/reklam/film1.jpg";
import Film2 from "./../../../../assets/images/reklam/Film2.png";
import Film3 from "./../../../../assets/images/reklam/Film3.png";
import Film4 from "./../../../../assets/images/reklam/Film4.png";
import Film5 from "./../../../../assets/images/reklam/Film5.png";
import Film6 from "./../../../../assets/images/reklam/Film6.png";

// import VideoQuickView from "../QuickView/VideoQuickView";

import Film1Logo from "./../../../../assets/images/reklam/Film1-logo.png";
import Film2Logo from "./../../../../assets/images/reklam/Film2-logo.png";
import Film3Logo from "./../../../../assets/images/reklam/Film3-logo.png";
import Film4Logo from "./../../../../assets/images/reklam/Film4-logo.png";
import Film5Logo from "./../../../../assets/images/reklam/Film5-logo.png";
import Film6Logo from "./../../../../assets/images/reklam/Film6-logo.png";
import { useState } from "react";

import VideoQuickView from "../../../../components/QuickView/VideoQuickView";


function FilmProducts() {
  const [flag1, setflag1] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [flag3, setflag3] = useState(false);
  const [flag4, setflag4] = useState(false);
  const [flag5, setflag5] = useState(false);
  const [flag6, setflag6] = useState(false);
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  

  return (
    <section className="w-full h-screen flex justify-center flex-col items-center ">
      <div className="w-full h-screen flex flex-col">
        <div className="flex w-full h-[50%] grid grid-cols-3">
        <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${Film1})` }}
        onMouseOver={() => setShowButton(true)}
        onMouseOut={() => setShowButton(false)}
      >
        <img className={`${!showButton ? "opacity-100" : "opacity-0"} absolute inset-0 w-80 m-auto transition-all duration-300 ease-out`} src={Film1Logo} />
        <a className={`${!showButton ? "opacity-100" : "opacity-0"} absolute pt-44 text-white transition-all duration-300 ease-out`}>DEFA Solid</a>

        <button
          className={`${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          } transition-all duration-300 ease-out group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow`}
          onClick={() => setOpen(true)}
        >
          <div className="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Mer information
          </span>
        </button>
      </div>



          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
            style={{ backgroundImage: `url(${Film2})` }}
            onMouseOver={() => {
              setflag2(true);
            }}
            onMouseOut={() => {
              setflag2(false);
            }}
          >
            {flag2 === false ? (
              <img className="absolute inset-0 m-auto" src={Film2Logo} />
            ) : (
              <button class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow" onClick={() => setOpen(true)}>
              <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">Mer information</span>
            </button>
            )}
          </div>

          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
            style={{ backgroundImage: `url(${Film3})` }}
            onMouseOver={() => {
              setflag3(true);
            }}
            onMouseOut={() => {
              setflag3(false);
            }}
          >
            {flag3 === false ? (
              <img className="absolute inset-0 m-auto" src={Film3Logo} />
            ) : (
              <button class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow" onClick={() => setOpen(true)}>
              <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">Mer information</span>
            </button>
            )}
          </div>
        </div>
        <div className="w-full h-[50%] grid grid-cols-3">
          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
            style={{ backgroundImage: `url(${Film4})` }}
            onMouseOver={() => {
              setflag4(true);
            }}
            onMouseOut={() => {
              setflag4(false);
            }}
          >
            {flag4 === false ? (
              <img className="absolute inset-0 m-auto" src={Film4Logo} />
            ) : (
              <button class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow" onClick={() => setOpen(true)}>
              <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">Mer information</span>
            </button>
            )}
          </div>

          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
            style={{ backgroundImage: `url(${Film5})` }}
            onMouseOver={() => {
              setflag5(true);
            }}
            onMouseOut={() => {
              setflag5(false);
            }}
          >
            {flag5 === false ? (
              <img className="absolute inset-0 m-auto" src={Film5Logo} />
            ) : (
              <button class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow" onClick={() => setOpen(true)}>
              <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">Mer information</span>
            </button>
            )}
          </div>

          <div
            className="cursor-pointer w-full h-[100%] bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
            style={{ backgroundImage: `url(${Film6})` }}
            onMouseOver={() => {
              setflag6(true);
            }}
            onMouseOut={() => {
              setflag6(false);
            }}
          >
            {flag6 === false ? (
              <img className="absolute inset-0 m-auto" src={Film6Logo} />
            ) : (
              <button class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow" onClick={() => setOpen(true)}>
              <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">Mer information</span>
            </button>
              
            )}
          </div>
        </div>
      </div>
      <VideoQuickView open={open} setOpen={setOpen} flag={"flag1"} />
    </section>
  );
}

export default FilmProducts;
