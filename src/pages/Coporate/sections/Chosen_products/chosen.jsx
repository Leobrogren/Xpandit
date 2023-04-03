/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import Bild from "./../../../../assets/images/coporate/Bild.png"


function ChosenProducts() {
	return (
		<section className="w-full flex justify-center flex-col items-center py-[6rem]">
			<div className="w-[85%] flex gap-12 items-center justify-center">
				<div className="w-full flex flex-col justify-center w-[50%] lg:w-[100%] text-left">
					<h3 className="text-[57px] pb-7 font-acumin font-bold">Professional videos for <br/>brand aware clients.</h3>
					<p className="text-[25px] pb-10 font-normal font-acumin">Intervjuer, Employer Branding, demofilmer. Xpand<br/> 
					It Media brinner för att hjälpa branschledande<br/> företag att förmedla viktiga budskap till sina<br/> följare. Filmproduktion är ett modernt,<br/> framträdande sätt att sprida information.</p>
						<button class="group relative h-12 w-48 overflow-hidden rounded-xl bg-[#f5f5f5] text-lg shadow">
    <div class="absolute inset-0 w-3 bg-[#1a1a1a] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Starta projekt</span>
  </button>
				</div>
				<div className="w-[40%] flex justify-center">
					<img src={Bild}/>
				</div>
			</div>
		</section>
	);
}

export default ChosenProducts;
