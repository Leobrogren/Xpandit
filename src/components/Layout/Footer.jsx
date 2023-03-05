import facebook from "./../../assets/images/footer/facebook.png";
import linkdin from "./../../assets/images/footer/linkdin.png";
import instagram from "./../../assets/images/footer/instagram.png";
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from "./../Blog/blog";
import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  // let headerdata;

  return (
    <>
      {/* Desktop header */}

      <footer className="flex flex-col w-full 2lg:hidden" id="footer">
        <Blog />
        <div className="w-full flex justify-center py-8 bg-white">
          <div className="w-[85%] content-center flex justify-between">
            <div className="flex gap-8">
            <FontAwesomeIcon className="h-6 w-auto" icon={faLinkedin} />
            <FontAwesomeIcon className="h-6 w-auto" icon={faInstagram} />
            <FontAwesomeIcon className="h-6 w-auto" icon={faFacebook} />

            </div>

            <div className="flex flex-row gap-6 ">
              <Link to="/reklam" className="flex items-center">
                <p className="font-acumin font-medium text-[20px]">
                  Reklamfilm
                </p>
              </Link>
              <Link to="/eventfilm" className="flex items-center">
                <p className="font-acumin font-medium text-[20px]">Eventfilm</p>
              </Link>
              <Link to="/coporate" className="flex items-center">
                <p className="font-acumin font-medium text-[20px]">Corporate</p>
              </Link>
              <Link to="/omoss" className="flex items-center">
                <p className="font-acumin font-medium text-[20px]">Om oss</p>
              </Link>
              <p className="font-acumin font-medium text-[20px]">Kontakt</p>
            </div>

            <p className="text-black text-[16px] font-roboto font-normal">
              ©2022, All right reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile header */}

      <footer className="hidden 2lg:flex flex-col w-full">
        <div className="bg-white py-8 w-full flex justify-center">
          <div className="w-[85%] flex justify-between">
            <div className="flex  gap-12">
              <img
                className="h-5 w-auto"
                src={instagram}
                href="www.test.se"
                alt="Follow us on instagram"
              />

              <img
                className="h-5 w-auto"
                src={linkdin}
                alt="Follow us on linkedin"
              />

              <img
                className="h-5 w-auto"
                src={facebook}
                alt="Follow us on facebook"
              />
            </div>
            <div>
              <p>Reklamfilm</p>
              <p>Eventfilm</p>
              <p>Corporate</p>
              <p>Om oss</p>
              <p>Kontakt</p>
            </div>

            <p className="text-black text-[16px] font-roboto font-normal">
              ©2022, All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
