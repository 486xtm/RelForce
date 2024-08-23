import PagesMetaHead from "../components/PagesMetaHead";
import AppHeader from "../components/shared/AppHeader";
import Expertise from "../components/home/Expertise";
import Who from '../components/home/Who'
import Connect from '../components/home/Connect';
import ClientsComp from "../components/home/ClientsComp";
import PortfolioComp from "../components/home/PortfolioComp";
export default function Home() {
  return (
    <div>
      <PagesMetaHead title="Home" />
      <div>
        <div className="container mx-auto">
          <AppHeader />
        </div>
        <div
          className="flex flow-end flex-col justify-center items-center h-[90vh] mt-[-150px] pt-[150px] w-full"
          style={{
            backgroundImage: `url(/images/back1.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center container">
            <span className="orbitron text-[#FE5A36] leading-[100%] font-bold text-[36px] md:text-[75px] lg:text-[100px]">
              Your Vision,
            </span>
            <br />
            <span className="orbitron text-[#FE5A36] leading-[100%] font-bold text-[36px] md:text-[75px] lg:text-[100px]">
              Our Expertise
            </span>
            <br />
            <br />
            <span className="lg:text-[25px] md:text-[20px] text-[14px] open-sans leading-[44px] w-[662px] h-[88px] text-[white]">
              We create beautiful and functional websites <br />
              for businesses of all sizes.
            </span>
            <br />
            <br />

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
                text-[12px]
                lg:text-[15px]
								gap-[5px]
								justify-center
								hover:bg-[#FF3D12]
								transition
								duration-300
                mr-4
							"
            >
              <div className="flex gap-2">
                Get Started
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
            <button
              className="
								orbitron
								text-[#FFF]
								bg-[#1E1E1E]
								border-[#FE5A36]
								border-2
								rounded-[5px]
								px-[18px]
								py-[8px]
								gap-[5px]
								w-[150px]
                text-[12px]
                lg:text-[15px]
								hover:bg-[#FF3D12]
								transition
								duration-300
                mr-4
							"
            >
              Learn More
            </button>
          </div>
          <div className="orbitron text-[grey] ml-[50%] mt-[100px]">
            <span className="text-[#FF7253]">01</span> | 02 | 03
          </div>
        </div>
          
        <div
          className="lg:flex orbitron lg:py-10 lg:px-0 px-10 "
          style={{
            background:
              "linear-gradient(133.47deg, rgba(11, 10, 10, 0) 34.97%, #0B0A0A 111.88%), #1E1E1E",
          }}
        >
          <div className="container mx-auto lg:flex orbitron lg:py-10 lg:px-0 px-10 ">
            <div className="lg:w-1/3 w-full justify-center items-center p-[40px] h-[250px] flex flex-col">
              <div
                className="lg:text-[100px] text-[80px] leading-[100%] font-bold text-transparent "
                style={{
                  background:
                    "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
                  backgroundClip: "text",
                }}
              >
                200+
              </div>
              <br />
              <div className="font-bold text-[25px] text-center leading-[100%] text-[white]">
                Websites Completed
              </div>
            </div>
            <div className="lg:w-1/3 w-full lg:border-x-2 lg:border-y-0 border-y-2 border-[#464646] justify-center items-center p-[40px] h-[250px] flex flex-col">
              <div
                className="lg:text-[100px] text-[80px]  leading-[100%] font-bold overflow-hidden text-transparent"
                style={{
                  background:
                    "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
                  backgroundClip: "text",
                }}
              >
                500+
              </div>
              <br />
              <div className="font-bold text-[25px] text-center leading-[100%] text-[white]">
                Happy Clients
              </div>
            </div>
            <div className="lg:w-1/3 w-full justify-center items-center p-[40px] h-[250px] flex flex-col">
              <div
                className="lg:text-[100px] text-[80px] leading-[100%] font-bold text-transparent"
                style={{
                  background:
                    "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
                  backgroundClip: "text",
                }}
              >
                120+
              </div>
              <br />
              <div className="font-bold text-[25px] text-center leading-[100%] text-[white]">
                Award Earned
              </div>
            </div>
          </div>
        </div>
        <Expertise />
        <ClientsComp/>
        <PortfolioComp/>
        <Who/>
        <Connect/>
      </div>
    </div>
  );
}
