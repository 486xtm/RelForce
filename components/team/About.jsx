import Image from "next/image";
import aboutTeam from "../../public/images/aboutTeam.png";
import who1 from "../../public/images/who-1.png";
import who2 from "../../public/images/who-2.png";
import who3 from "../../public/images/who-3.png";

export default function TeamAbout() {
  return (
    <div
      className="h-[auto] bg-cover orbitron "
      style={{
        backgroundImage: `url(/images/back4.png)`,
      }}
    >
      <div className="lg:py-[150px] py-[75px] container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse gap-[50px]">
          <div className="w-full itmes-center justify-center space-y-5 text-center lg:text-left ">
            <div
              className="2xl:text-[75px] xl:text-[60px] lg:text-[40px] text-[24px] leading-[100%] font-bold text-transparent "
              style={{
                background:
                  "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
                backgroundClip: "text",
              }}
            >
              Learn more <br /> about us!
            </div>
            <div className="open-sans text-[white] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[8px]">
              We are relforce, a passionate team of digital craftsmen dedicated
              to creating exceptional online experiences. Born out of a shared
              love for technology and design, we strive to transform businesses
              through innovative web solutions. Our mission is to empower
              clients to achieve their digital goals by delivering cutting-edge
              websites and applications. Our core values of creativity,
              collaboration, and customer focus drive us to exceed expectations.
            </div>
            <div>
              <hr className="w-3/4 py-5 border-gray-400 lg:block hidden" />
              
              <div className="w-full flex items-center lg:hidden flex-col relative">
                <div className="lg:hidden absolute block w-[250px] h-[250px] bg-[#FE5A36] blur-[100px] " />
                <Image className="p-[25px] mx-auto relative " src={aboutTeam} />
                <div
                  className="absolute text-[white] text-center px-5 pb-4 bottom-0 left-0"
                  style={{
                    background:
                      "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #292120",
                    border: "1px solid #FFFFFF",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <span className="orbitron text-[30px] font-bold">500+</span>
                    <br />
                    <span className="orbitron text-[10px] font-bold">
                      Happy Clients
                    </span>
                  </div>
                </div>
                <div
                  className="absolute text-[white] text-center px-5 pb-4 right-0"
                  style={{
                    background:
                      "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #292120",
                    border: "1px solid #FFFFFF",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <span className="orbitron text-[30px] font-bold">120+</span>
                    <br />
                    <span className="orbitron text-[10px] font-bold">
                      Awards Earned
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <Image
                  className="relative w-[70px] 2xl:w-[70px] xl:w-[50px] lg:w-[30px]"
                  src={who1}
                />
                <div className="lg:text-left text-center">
                  <span className="text-[white] text-[16px] 2xl:text-[32px] xl:text-[20px] lg:text-[17px] ">
                    Core Values
                  </span>
                  <br />
                  <span className="text-[white] text-[8px] 2xl:text-[12px] xl:text-[11px] lg:text-[8px] leading-[100%]  open-sans">
                    To be the leading digital partner, shaping the future of
                    online experiences through cutting-edge technology and
                    unparalleled customer satisfaction.
                  </span>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <Image
                  className="relative w-[70px] 2xl:w-[70px] xl:w-[50px] lg:w-[30px]"
                  src={who2}
                />
                <div className="lg:text-left text-center">
                  <span className="text-[white] text-[16px] 2xl:text-[32px] xl:text-[20px] lg:text-[17px] ">
                    Client Focus
                  </span>
                  <br />
                  <span className="text-[white] text-[8px] 2xl:text-[12px] xl:text-[11px] lg:text-[8px] leading-[100%]  open-sans">
                    Innovation, excellence, collaboration, and client
                    satisfaction are the pillars of relforce.
                  </span>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <Image
                  className="relative w-[50px] 2xl:w-[50px] xl:w-[40px] lg:w-[20px]"
                  src={who3}
                />
                <div className="lg:text-left text-center lg:ml-[10px] 2xl:ml-[20px]">
                  <span className="text-[white] text-[16px] 2xl:text-[32px] xl:text-[20px] lg:text-[17px] ">
                    Mission and Vision
                  </span>
                  <br />
                  <span className="text-[white] text-[8px] 2xl:text-[12px] xl:text-[11px] lg:text-[8px] leading-[100%]  open-sans">
                    At relforce, our clients are at the heart of everything we
                    do. We believe in building long-term partnerships based on
                    mutual trust and understanding.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:flex hidden flex-col relative">
            <div className="lg:block hidden absolute w-[350px] h-[350px] bg-[#FE5A36] blur-[200px] " />
            <Image
              className="py-[50px] px-[75px]  mx-auto relative "
              src={aboutTeam}
            />
            <div
              className="absolute text-[white] text-center px-5 pb-5 bottom-0 left-0"
              style={{
                background:
                  "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #292120",
                border: "1px solid #FFFFFF",
                borderRadius: "12px",
              }}
            >
              <div>
                <span className="orbitron text-[60px] font-bold">500+</span>
                <br />
                <span className="orbitron text-[24px] font-bold">
                  Happy Clients
                </span>
              </div>
            </div>
            <div
              className="absolute text-[white] text-center px-5 pb-5 right-0"
              style={{
                background:
                  "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #292120",
                border: "1px solid #FFFFFF",
                borderRadius: "12px",
              }}
            >
              <div>
                <span className="orbitron text-[60px] font-bold">120+</span>
                <br />
                <span className="orbitron text-[24px] font-bold">
                  Awards Earned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
