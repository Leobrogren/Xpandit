import background_video from "./../../../../assets/images/eventfilm/eventfilm.banner.mp4";
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hero() {
  return (
    <section
      className="flex h-[90vh] w-full bg-cover bg-center bg-no-repeat items-center justify-center"
      id="hero"
    >
      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          src={background_video}
          type="video/mp4"
          className="absolute w-full h-full object-cover top-0 left-0"
        />
        <div className="absolute w-full h-full bg-black opacity-25 z-10"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center z-20">
          <div className="mb-16 ml-12 text-center">
            <h1 className="uppercase font-bold font-premier text-[120px] text-white tracking-wider">
              EVENTFILM
            </h1>
          </div>
          <div className="absolute bottom-0 flex flex-row justify-between px-6 py-10 ">
            <div className="flex gap-4 text-white mr-4">
              <FontAwesomeIcon className="h-6 w-auto" icon={faLinkedin} />
              <FontAwesomeIcon className="h-6 w-auto" icon={faInstagram} />
              <FontAwesomeIcon className="h-6 w-auto" icon={faFacebook} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
