import Image from "next/image";
import back from "../../public/images/back2.png";
import mobile from "../../public/images/mobile.png";
const Experise = () => {
  return (
    <div
      className="h-[auto] bg-cover  orbitron "
      style={{
        backgroundImage: `url(/images/back2.png)`,
      }}
    >
      <div className=" pt-[150px]">
        <div className="text-center">
          <button className="bg-[#1E1E1E] text-center mb-5 px-[36px] py-[10px] text-[white] rounded-[5px]">
            Services
          </button>

          <div
            className="text-[72px]  leading-[100%] font-bold text-transparent "
            style={{
              background:
                "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
              backgroundClip: "text",
            }}
          >
            Our Expertise at Work
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-2/5 ml-[100px] text-[white] items-center space-y-5">
            <div className="items-center boder-2  justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-4/5 flex transition-all "
                style={{
                  background:
                    "linear-gradient(180deg, rgba(101, 101, 101, 0.32) 0%, rgba(108, 108, 108, 0.2) 100%)",
                    borderImage: "linear-gradient(to right, #FF3D12, #FF7253) 1 stretch"
                }}>
              <div>
                <div className="text-[45px]"> WebSite Design</div>
                <div className="text-[15px] open-sans">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </div>
              </div>
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
            </div>
            <div className="items-center boder-2  justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-4/5 flex transition-all"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(101, 101, 101, 0.32) 0%, rgba(108, 108, 108, 0.2) 100%)"
                }}>
              <div>
                <div className="text-[45px]"> Mobile App <br/>Development</div>
                <div className="text-[15px] open-sans">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </div>
              </div>
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
            </div>
            <div className="items-center boder-2  justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-4/5 flex transition-all"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(101, 101, 101, 0.32) 0%, rgba(108, 108, 108, 0.2) 100%)",
                    borderImage: "linear-gradient(to right, #FF3D12, #FF7253) 1 stretch"
                }}>
              <div>
                <div className="text-[45px]"> E-commerce<br/> Development</div>
                <div className="text-[15px] open-sans">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </div>
              </div>
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
            </div>
            <div className="items-center boder-2  justify-between rounded-[10px] px-[38px] py-[26px] hover:w-full w-4/5 flex transition-all"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(101, 101, 101, 0.32) 0%, rgba(108, 108, 108, 0.2) 100%)",
                    borderImage: "linear-gradient(to right, #FF3D12, #FF7253) 1 stretch"
                }}>
              <div>
                <div className="text-[45px]">Digital Marketing</div>
                <div className="text-[15px] open-sans">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </div>
              </div>
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
            </div>
          </div>
          <div className="w-3/5 px-[100px] relative">
            <div className="absolute w-full h-[600px] bg-[#FE5A36] blur-[350px] z-10"></div>
            <Image className="relative z-20 w-full h-full" src={mobile} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experise;
