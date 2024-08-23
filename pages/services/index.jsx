import PagesMetaHead from "../../components/PagesMetaHead";
import AppHeader from "../../components/shared/AppHeader";
import DevCard from "../../components/Services/DevCard";
import Faqx from "../../components/Services/Faqs";

export default function Home() {
  return (
    <div>
      <PagesMetaHead title="Home" />
      <div>
        <div className="container mx-auto">
          <AppHeader />
        </div>
        <div
          className="flex flow-end flex-col justify-center items-center h-[80vh] mt-[-150px] w-full"
          style={{
            backgroundImage: `url(/images/services_back.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col px-0 text-center ">
            <span className="orbitron text-[#FE5A36] leading-[100%] font-bold text-[36px] md:text-[75px] lg:text-[80px] xl:text-[100px]">
                Crafting Digital Solutions
            </span>
            <span className="orbitron text-[#FE5A36] leading-[100%] font-bold text-[36px] md:text-[75px] lg:text-[100px] mb-5">
                Tailored to Your Needs
            </span>
            <span className="lg:text-[25px] md:text-[20px] text-[14px] open-sans leading-[44px] h-[88px] text-[white]">
                We create beautiful and functional websites<br/>for businesses of all sizes.
            </span>
          </div>
        </div>
        <div className="absolute w-[300px] h-[300px] mt-[300px] bg-[#FE5A36] blur-[150px] z-10 lg:block hidden" />

        <div className='container -mt-[150px] grid grid-cols-1 gap-10 px-5 mx-auto lg:grid-cols-3 mb-20'>
          <DevCard title={"Website Design"} />
          <DevCard title={"Mobie App Development"} />
          <DevCard title={"E-commerce Development"} />
          <DevCard title={"Website Design"} />
          <DevCard title={"E-commerce Development"} />
          <DevCard title={"E-commerce Development"} />
        </div>

        <div className='flex flex-col items-center justify-center w-full py-20 text-center pb-7'
          style={{backgroundImage: `url(/images/services_second.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
        >
            <span className="orbitron mb-10 text-[#FE5A36] leading-[100%] font-bold text-[36px] md:text-[75px] lg:text-[80px] xl:text-[100px]">
              Bold and Direct
            </span>
            <span className="lg:text-[25px] mb-5 md:text-[20px] text-[14px] open-sans leading-[44px] text-[white]">
              Grow Your Business with Our Expert Services
            </span>
            <button
                    className="
                    orbitron
                    text-[#FFF]
                    leading-[20px]
                    bg-[#FE5A36]
                    border-[#FE5A36]
                    border-2
                    rounded-[5px]
                    px-[18px]
                    lg:py-[10px]
                    py-[7px]
                    text-[9px]
                    lg:text-[16px]
                    gap-[5px]
                    justify-center
                    hover:bg-[#FF3D12]
                    transition
                    duration-300
                    items-center
                    flex
                    mt-5
                    mb-[100px]
                "
                >
                <div className="flex gap-2">
                  Achieve Your Digital Goals
                    <svg
                    width="17"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.5 0.5L16.3887 24.5L12.6758 12.3242L0.5 8.61133L24.5 0.5Z"
                        fill="white"
                    />
                    </svg>
                </div>
            </button>
            <div className='flex flex-row items-center justify-center space-x-1 lg:space-x-2'>
              <div className='lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] bg-white flex-none flex-grow-0 rounded-full cursor-pointer'></div>
              <div className='lg:w-[20px] lg:h-[20px] w-[8px] h-[8px] bg-[#FF4015] flex-none flex-grow-0 rounded-full cursor-pointer'></div>
              <div className='lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] bg-white flex-none flex-grow-0 rounded-full cursor-pointer'></div>
            </div>
        </div>
        <Faqx />
      </div>
    </div>
  );
}
