import Image from "next/image";
import back from "../../public/images/back2.png";
import mobile from "../../public/images/mobile.png";
import { useState } from "react";
const Experise = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <div
      className="h-[auto] bg-cover orbitron "
      style={{
        backgroundImage: `url(/images/back2.png)`,
      }}
    >
      <div className="py-[150px] container mx-auto">
        <div className="text-center">
          <button className="bg-[#1E1E1E] text-center mb-5 px-[36px] py-[10px] text-[white] rounded-[5px]">
            Services
          </button>

          <div
            className="text-[60px]  leading-[100%] font-bold text-transparent "
            style={{
              background:
                "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
              backgroundClip: "text",
            }}
          >
            Our Expertise at Work
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-[50px] items-center ">
          <div className="lg:w-1/2 w-full flex flex-col  text-[white]  space-y-5 lg:items-start items-center">
            <div
              className="items-center  justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-5/6 flex transition-all expertise"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <div>
                <div className={`${isHovered1? "text-[45px]" : "text-[35px]"} leading-[100%]`}> WebSite Design</div>
                <div className={`${ isHovered1 ? "text-[13px]":"text-[10px]"} open-sans`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever
                  since the 1500s.
                </div>
              </div>
              {isHovered1 ? (
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 0.600098L33.1014 50.6001L25.3662 25.2339L0 17.4987L50 0.600098Z"
                    fill="url(#paint0_linear_2036_66)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2036_66"
                      x1="-1.64554e-07"
                      y1="50.6001"
                      x2="45.2906"
                      y2="18.1165"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#FF7253" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.6001 0.300049L27.0812 40.3L20.8931 20.0071L0.600098 13.8189L40.6001 0.300049Z"
                    fill="#D9D9D9"
                  />
                </svg>
              )}
            </div>
            <div
              className="items-center boder-2 justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-5/6 flex transition-all expertise"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <div>
                <div className={`${isHovered2? "text-[45px]" : "text-[35px]"} leading-[100%]`}>
                  {" "}
                  Mobile App <br />
                  Development
                </div>
                <div className={`${ isHovered2 ? "text-[13px]":"text-[10px]"} open-sans`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever
                  since the 1500s.
                </div>
              </div>
              {isHovered2 ? (
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 0.600098L33.1014 50.6001L25.3662 25.2339L0 17.4987L50 0.600098Z"
                    fill="url(#paint0_linear_2036_66)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2036_66"
                      x1="-1.64554e-07"
                      y1="50.6001"
                      x2="45.2906"
                      y2="18.1165"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#FF7253" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.6001 0.300049L27.0812 40.3L20.8931 20.0071L0.600098 13.8189L40.6001 0.300049Z"
                    fill="#D9D9D9"
                  />
                </svg>
              )}
            </div>
            <div
              className="items-center boder-2  justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-5/6 flex transition-all expertise"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <div>
                <div className={`${isHovered3? "text-[45px]" : "text-[35px]"} leading-[100%]`}>
                  {" "}
                  E-commerce
                  <br /> Development
                </div>
                <div className={`${ isHovered3 ? "text-[13px]":"text-[10px]"} open-sans`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever
                  since the 1500s.
                </div>
              </div>
              {isHovered3 ? (
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 0.600098L33.1014 50.6001L25.3662 25.2339L0 17.4987L50 0.600098Z"
                    fill="url(#paint0_linear_2036_66)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2036_66"
                      x1="-1.64554e-07"
                      y1="50.6001"
                      x2="45.2906"
                      y2="18.1165"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#FF7253" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.6001 0.300049L27.0812 40.3L20.8931 20.0071L0.600098 13.8189L40.6001 0.300049Z"
                    fill="#D9D9D9"
                  />
                </svg>
              )}
            </div>
            <div
              className="items-center boder-2  justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-5/6 flex transition-all expertise"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <div>
                <div className={`${isHovered4? "text-[45px]" : "text-[35px]"} leading-[100%]`}>Digital Marketing</div>
                <div className={`${ isHovered4 ? "text-[13px]":"text-[10px]"} open-sans`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever
                  since the 1500s.
                </div>
              </div>
              {isHovered4 ? (
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 0.600098L33.1014 50.6001L25.3662 25.2339L0 17.4987L50 0.600098Z"
                    fill="url(#paint0_linear_2036_66)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2036_66"
                      x1="-1.64554e-07"
                      y1="50.6001"
                      x2="45.2906"
                      y2="18.1165"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#FF7253" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.6001 0.300049L27.0812 40.3L20.8931 20.0071L0.600098 13.8189L40.6001 0.300049Z"
                    fill="#D9D9D9"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className="lg:w-1/2  w-full items-center justify-center flex relative">
            <div className="absolute w-full mt-[200px] h-[400px] bg-[#FE5A36] blur-[350px] z-10"></div>
            <Image className="relative z-20 w-full" src={mobile} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experise;
