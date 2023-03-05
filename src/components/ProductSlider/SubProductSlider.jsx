import { useState } from "react";
import kund1 from "./../../assets/images/dashboard/alexander.jpeg";
import kund2 from "./../../assets/images/dashboard/martin.jpeg";
import kund3 from "./../../assets/images/dashboard/amanda.jpeg";
import VideoQuickView from "../QuickView/VideoQuickView";

function SubProductSlider() {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState('flag1');

  return (
    <div className="grid grid-cols-3 w-full gap-12 py-[4rem] mt-[50px]">
      <div className="h-[350px] relative">
        <div
          className="w-[104px] border-2 bg-cover rounded-full h-[104px] absolute top-[-30px] left-[-30px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kund1})`,
          }}
        />
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left pl-[100px]">
            <p className="font-semibold text-white text-[19px]">
              Alexander Sjölin
            </p>
            <p className="text-[12px] text-[#DDDDDD] font-normal">
              CMO, Picsmart
            </p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              ”Vi tog kontakt med Xpand It Media för att fånga dels våra fordon
              och personal i naturliga miljöer och för att kommunicera våra
              unika USPar. Där tycker vi att Xpand It Media gjort ett grymt jobb
              och vi är otroligt nöjda med det materialet som de tagit fram. Vi
              rekommenderar absolut Xpand It Media”
            </p>
            <button class="group relative h-10 w-38 overflow-hidden rounded-xl bg-[#fff] text-lg shadow"  onClick={() => {setOpen(true); setFlag('flag1');}}>
    <div class="absolute w-3 bg-[#ededed] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-black">Se videon</span>
  </button>
          </div>
        </div>
      </div>
      <div className="h-[350px] relative">
        <div
          className="w-[104px] bg-cover border-2 rounded-full h-[104px] absolute top-[-30px] left-[-30px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kund2})`,
          }}
        />
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left pl-[100px]">
            <p className="font-semibold text-white text-[19px]">
              Martin Jonsson
            </p>
            <p className="text-[12px] text-[#DDDDDD] font-normal">CEO, DEFA</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              ”Vi jobbar idag väldigt tätt med Xpand It Media, ett ytterst
              fruktbart och intressant samarbete. När det kommer till den här
              typen av samarbete så söker jag personligen alltid efter en
              exceptionell talang. Vi vill ha en partner som kan göra oss unika
              och det får vi verkligen med Xpand It Media”
            </p>
            <button class="group relative h-10 w-38 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow"  onClick={() => {setOpen(true); setFlag('flag2');}}>
    <div class="absolute w-3 bg-[#ededed] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-black">Se videon</span>
  </button>
          </div>
        </div>
      </div>
      <div className="h-[350px] relative">
        <div
          className="w-[104px] bg-cover border-2 rounded-full h-[104px] absolute top-[-30px] left-[-30px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .0), rgba(0,0,0, .0)), url(${kund3})`,
          }}
        />
        <div className="bg-[#161616] h-full p-[1rem] flex flex-col">
          <div className="text-left pl-[100px]">
            <p className="font-semibold text-white text-[19px]">
              Amanda Liffner
            </p>
            <p className="text-[12px] text-[#DDDDDD] font-normal">VD, Jackie</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              ”Vi är supernöjda med Xpand It Media. Vi känner verkligen att de
              har matchat oss i denna process (...) De har verkligen kommit med
              mycket bra idéer och input samt svarat och återkopplat väldigt
              snabbt (...) Jag kan vamt rekommendera dem till andra.”
            </p>
            <button class="group relative h-10 w-38 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow"  onClick={() => {setOpen(true); setFlag('flag3');}}>
    <div class="absolute w-3 bg-[#ededed] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-black">Se videon</span>
  </button>
          </div>
        </div>
      <VideoQuickView open={open} setOpen={setOpen} flag={flag}/>

      </div>
    </div>
  );
}

export default SubProductSlider;
