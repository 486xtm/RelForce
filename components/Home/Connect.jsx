import React from "react";
const Connect = () => {
  return (
    <div
      className="h-[auto] bg-cover orbitron "
      style={{
        backgroundImage: `url(/images/back5.png)`,
      }}
    >
      <div className="py-[150px] container mx-auto">
        <div className="text-center mb-10">
          <button className="bg-[#1E1E1E] text-center mb-5 px-[36px] py-[10px] text-[white] rounded-[5px]">
            Contact Us
          </button>

          <div
            className="text-[60px] font-bold text-transparent "
            style={{
              background:
                "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
              backgroundClip: "text",
            }}
          >
            Let's Connect
          </div>
          <div className="open-sans text-[24px] text-white">
            We'd love to hear from you! Fill out the form below or contact us
            directly
          </div>
        </div>
        <div className="w-4/5 text-center mx-auto space-y-[25px] p-[50px] rounded-[10px]  connect-back">
          <input
            type="text"
            className=" text-white transition-colors duration-200 focus:border-[#FE5A36] lg:mr-[2%] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] py-[13px] open-sans"
            placeholder="Name"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] py-[13px] open-sans"
            placeholder="Email"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] lg:mr-[2%] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] py-[13px] open-sans"
            placeholder="Phone"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] lg:w-[49%] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] py-[13px] open-sans"
            placeholder="Company"
          />
          <input
            type="text"
            className="text-white transition-colors duration-200 focus:border-[#FE5A36] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] py-[14px] open-sans"
            placeholder="Subject"
          />
          <textarea
            className="text-white focus:border-[#FE5A36] w-full px-[12px] bg-[#202020] border-2 border-[#c6c6c6] rounded-[10px] py-[13px] open-sans"
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
    </div>
  );
};
export default Connect;
