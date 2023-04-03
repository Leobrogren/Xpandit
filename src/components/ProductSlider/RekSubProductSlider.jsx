import { useState } from "react";
import VideoQuickView from "../QuickView/VideoQuickView";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from "react";

function RekSubProductSlider() {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState("flag1");
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      spaceBetween={50}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
      loop={true} // autoplay
      navigation  // pagination={{ clickable: true }}
      loopFillGroupWithBlank={true} // Add this option
      loopPreventsSlide={true} // Add this option
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="w-full gap-2 py-[4rem] mt-[50px]"
    >
      <SwiperSlide className="inline-block h-[350px] w-[450px] relative">
        <div className="flex bg-[#161616] h-full w-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">1️. Briefmöte</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
            Kunden går igenom sina behov - t.ex har de en produkt som de vill marknadsföra med hjälp av video. Vi tar anteckningar och bollar idéer med kunden.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="inline-block h-[350px] w-[450px] relative">
        <div className=" flex bg-[#161616] h-full w-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">2. Idédokument</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
              Vi brainstormar idéer utifrån briefmötet och skapar ett dokument
              som skickas över till kunden. Dokumentet innehåller 2-3 idéer som
              vi tror på och som är genomförbara inom ramarna för budgeten. Vid
              godkännande av kunden går det vidare till nästa steg. Om kunden
              har feedback korrigeras idéerna därefter.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="inline-block h-[350px] w-[450px] relative">
        <div className=" flex bg-[#161616] h-full w-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">3. Storyboard</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-[#FFFFFF] font-extralight font-interpol text-left">
              Om kunden önskar/filmen kräver en storyboard skapas den i detta
              steg. En scen-för-scen beskrivning av filmen från början till slut
              i textform. Produktionsdatum och deadline inkluderas. Vi
              hargenerellt upp till 2 arbetsveckor leveranstid men om möjligt
              skickas filmen så fort den är redigerad, gärna första versionen
              inom 1 vecka. En shotlist som beskriver vilka klipp som används
              kan även skapas här. Dokumentet skickas till kund som kan komma
              med feedback.
            </p>
          </div>
        </div>
        <VideoQuickView open={open} setOpen={setOpen} flag={flag} />
      </SwiperSlide>

      <SwiperSlide className="inline-block h-[350px] w-[450px] relative">
        <div className="flex bg-[#161616] h-full w-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">4. Planering</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
            Rekvisita, locations, skådespelare - allting praktiskt som behövs inför produktionen tas fram i detta steg.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="inline-block h-[350px] w-[450px] relative">
        <div className="flex bg-[#161616] h-full w-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">5. Produktion</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
            Utförande av storyboard och planering sker i detta steg.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="inline-block h-[350px] w-[450px] relative">
        <div className="flex bg-[#161616] h-full w-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">6. Redigering</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-white font-extralight font-interpol text-left">
            Materialet redigeras enligt storyboard och en färdigbearbetad version skickas till kunden.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="inline-block h-[350px] w-[450px] relative">
        <div className="flex bg-[#161616] h-full w-full p-[1rem] flex flex-col">
          <div className="text-left">
            <p className="font-bold text-white text-[30px]">7. Revision</p>
          </div>
          <div className="mt-6 flex flex-col justify-between h-[100%]">
            <p className="text-[18px] text-[#FFFFFF] font-extralight font-interpol text-left">
            Xpand It Media siktar alltid på att kunderna ska bli 100% nöjda med leveransen. Har kunderna någon feedback omredigeras filmen följaktligen. Vi ber kunden att summera all sin feedback i ett och samma mail/dokument för att undvika extra revisioner i onödan.
            </p>
          </div>
        </div>
        <VideoQuickView open={open} setOpen={setOpen} flag={flag} />
      </SwiperSlide>
    </Swiper>
  );
}

export default RekSubProductSlider;
