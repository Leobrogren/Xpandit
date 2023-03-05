import { useState } from "react";
// import QuickView from "../../../../components/QuickView/QuickView";
import QuickView from "../QuickView/QuickView";

function Blog() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-[85%] flex flex-col">
        <div className="text-center self-left">
          <h3 className="text-8xl mb-10 text-left font-bold text-[#0B0B0B]">
            Har du en brilljant
            <br />
            idé (eller inte)?
          </h3>
          <div className="flex">
          <button class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow"  onClick={() => setOpen(true)}>
    <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Starta projekt</span>
  </button>
          </div>
        </div>
      </div>
      <QuickView open={open} setOpen={setOpen} />
    </section>
  );
}

export default Blog;
