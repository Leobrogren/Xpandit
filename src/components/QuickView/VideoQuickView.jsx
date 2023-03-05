/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import case1 from "./../../assets/TopPage/case1.mp4";
import case2 from "./../../assets/TopPage/case2.mp4";
import case3 from "./../../assets/TopPage/case3.mp4";

function VideoQuickView({ open, setOpen, flag }) {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-[0.25]"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-[0.25]"
              >
                <Dialog.Panel className="relative overflow-hidden bg-white text-left shadow-xl transition-all w-[650px] h-max">
                  <div className="relative flex w-full h-full">
                    <div className="absolute top-0 right-0 sm:block p-1">
                      <ExitButton setOpen={setOpen} isMobile={true} />
                    </div>
                    <div className="h-full m-6">
                      {flag === "flag1" && (
                        <div className="flex-row items-baseline mb-4">
                          <p className="font-serif font-semibold text-[#222222] text-[20px]">
                            Alexander Sjölin{" "}
                          </p>
                          <p className="font-serif font-[328px] text-[#222222] text-[14px]">
                            CMO på Picsmart
                          </p>
                        </div>
                      )}

                      {flag === "flag2" && (
                        <div className="flex-row items-baseline mb-4">
                          <p className="font-serif font-semibold text-[#222222] text-[20px]">
                            Martin Jonsson{" "}
                          </p>
                          <p className="font-serif font-[328px] text-[#222222] text-[14px]">
                            VD på DEFA
                          </p>
                        </div>
                      )}

                      {flag === "flag3" && (
                        <div className=" flex-row items-baseline mb-4">
                          <p className="font-serif font-semibold text-[#222222] text-[20px]">
                            Amanda Liffner{" "}
                          </p>
                          <p className="font-serif font-[328px] text-[#222222] text-[14px]">
                            VD på Jackie
                          </p>
                        </div>
                      )}

                      <video controls className="mb-4">
                        {flag === "flag1" && <source src={case1} />}
                        {flag === "flag2" && <source src={case2} />}
                        {flag === "flag3" && <source src={case3} />}
                      </video>

                      <button class="group relative h-10 w-40 overflow-hidden rounded-xl bg-[#f5f5f5] text-m shadow"  onClick={() => setOpen(true)}>
    <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Starta projekt</span>
  </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const ExitButton = ({ setOpen, isMobile }) => {
  console.log(isMobile);
  return (
    <button
      className={`p-2 rounded-full group ${
        isMobile ? "hover:bg-black/10" : "hover:bg-porche/50"
      } transition`}
      onClick={() => {
        setOpen(false);
      }}
    >
      <XMarkIcon className="w-6 h-6 text-black/60 group-hover:text-black transition" />
    </button>
  );
};

export default VideoQuickView;
