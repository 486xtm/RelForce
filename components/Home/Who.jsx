import Image from "next/image";
import who from "../../public/images/who_1.png";
import who1 from "../../public/images/who-1.png";
import who2 from "../../public/images/who-2.png";
import who3 from "../../public/images/who-3.png";

export default function Who() {
  return (
    <div
      className="h-[auto] bg-cover orbitron "
      style={{
        backgroundImage: `url(/images/back4.png)`,
      }}
    >
          <div className="lg:block hidden absolute w-[400px] h-[400px] bg-[#FE5A36] blur-[250px]  whoblur"
          />
      <div className="lg:py-[150px] py-[75px] container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse gap-[50px]">
          <div className="w-full items-center flex flex-col ">
          <div className="lg:hidden block absolute w-[250px] h-[250px] bg-[#FE5A36] blur-[100px]  whoblur"
          />
            <Image className="lg:w-full w-4/5 mx-auto relative" src={who} />
            
          </div>
          <div className="w-full itmes-center justify-center space-y-5 text-center lg:text-left lg:ml-[-100px]">
            <button className="bg-[#1E1E1E] text-center px-[36px] py-[10px] lg:text-[10px] lg:px-[20px] lg:py-[10px] xl:text-[14px] xl:px-[36px] xl:py-[10px] text-[white] rounded-[5px]">
              About us
            </button>

            <div
              className="2xl:text-[60px] xl:text-[45px] lg:text-[30px]  leading-[100%] font-bold text-transparent "
              style={{
                background:
                  "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
                backgroundClip: "text",
              }}
            >
              Who We Are
            </div>
            <div className="open-sans text-[white] 2xl:text-[14px] xl:text-[10px] lg:text-[7px]">
              We are relforce, a passionate team of digital craftsmen dedicated
              to creating exceptional online experiences. Born out of a shared
              love for technology and design, we strive to transform businesses
              through innovative web solutions. Our mission is to empower
              clients to achieve their digital goals by delivering cutting-edge
              websites and applications. Our core values of creativity,
              collaboration, and customer focus drive us to exceed expectations.
            </div>
            <button
              className="
								orbitron
								text-[#FFF]
								leading-[20px]
								bg-[#FE5A36]
								border-[#FE5A36]
								border-2
								rounded-[5px]
                lg:text-[10px] xl:text-[14px] 
								px-[18px]
								py-[10px]
								gap-[5px]
								justify-center
								hover:bg-[#FF3D12]
								transition
								duration-300
                mr-4
							"
            >
              <div className="flex gap-2">
                Learn More
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
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:ml-[100px] lg:-mt-[200px] xl:-mt-[250px] 2xl:-mt-[280px]">
          <div className="lg:w-1/2 w-full flex">
  
          </div>
          <div className="lg:w-1/2 w-full space-y-3">
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <Image className="relative w-[70px] 2xl:w-[70px] xl:w-[50px] lg:w-[30px]" src={who1} />
                <div className="lg:text-left text-center">
                  <span className="text-[white] text-[32px] 2xl:text-[32px] xl:text-[20px] lg:text-[17px] ">Core Values</span><br/>
                  <span className="text-[white] text-[12px] 2xl:text-[12px] xl:text-[11px] lg:text-[8px]  open-sans">To be the leading digital partner, shaping the future of online experiences through cutting-edge technology and unparalleled customer satisfaction.</span>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <Image className="relative w-[70px] 2xl:w-[70px] xl:w-[50px] lg:w-[30px]" src={who2} />
                <div className="lg:text-left text-center">
                  <span className="text-[white] text-[32px] 2xl:text-[32px] xl:text-[20px] lg:text-[17px] ">Client Focus</span><br/>
                  <span className="text-[white] text-[12px] 2xl:text-[12px] xl:text-[11px] lg:text-[8px]  open-sans">Innovation, excellence, collaboration, and client satisfaction are the pillars of relforce.</span>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <Image className="relative w-[50px] 2xl:w-[50px] xl:w-[40px] lg:w-[20px]" src={who3} />
                <div className="lg:text-left text-center lg:ml-[10px] 2xl:ml-[20px]">
                  <span className="text-[white] text-[32px] 2xl:text-[32px] xl:text-[20px] lg:text-[17px] ">Mission and Vision</span><br/>
                  <span className="text-[white] text-[12px] 2xl:text-[12px] xl:text-[11px] lg:text-[8px]  open-sans">At relforce, our clients are at the heart of everything we do. We believe in building long-term partnerships based on mutual trust and understanding.</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
