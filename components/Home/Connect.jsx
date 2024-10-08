import React from "react";
export default function Connect () {
  return (
    <div
      className="h-[auto] bg-cover orbitron "
      style={{
        backgroundImage: `url(/images/back5.png)`,
      }}
    >
      <div className="lg:py-[150px] py-[75px] container mx-auto">
        <div className="text-center mb-10">
          <div
            className="text-[60px] font-bold text-transparent "
            style={{
              background:
                "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
              backgroundClip: "text",
            }}
          >
            Let&apos;s Connect
          </div>
          <div className="open-sans text-[24px] text-white">
            We&apos;d love to hear from you! Fill out the form below or contact us
            directly
          </div>
        </div>
        <div className="lg:w-4/5 w-full  text-center mx-auto space-y-[25px] lg:p-[50px] p-[10px] py-[50px] rounded-[10px]  connect-back">
          <input
            type="text"
            className=" text-white transition-colors duration-200 focus:border-[#FE5A36] lg:mr-[2%] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] lg:py-[13px] py-[7px] text-[12px] lg:text-[15px] open-sans"
            placeholder="Name"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] lg:py-[13px] py-[7px] text-[12px] lg:text-[15px] open-sans"
            placeholder="Email"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] lg:mr-[2%] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] lg:py-[13px] py-[7px] text-[12px] lg:text-[15px] open-sans"
            placeholder="Phone"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] lg:py-[13px] py-[7px] text-[12px] lg:text-[15px] open-sans"
            placeholder="Company"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] lg:py-[14px] py-[8px] lg:text-[15px] text-[12px] open-sans"
            placeholder="Subject"
          />
          <textarea
            className="text-white focus:border-[#FE5A36] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] lg:py-[13px] py-[7px] text-[12px] lg:text-[15px] open-sans"
            placeholder="Type your message here..."
            cols="30" // Set the number of columns
            rows="4" // Optional: Set the number of rows
          ></textarea>

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
								py-[10px]
								gap-[5px]
								justify-center
								hover:bg-[#FF3D12]
								transition
								duration-300
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
    </div>
  );
};
