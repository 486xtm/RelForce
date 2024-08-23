import React from "react";
export default function TeamContact() {
  return (
    <div
      className="h-[auto] bg-cover orbitron "
      style={{
        backgroundImage: `url(/images/team-back1.png)`,
      }}
    >
      <div className="py-[150px] px-[30px] container mx-auto">
        <div className=" w-full  text-center mx-auto space-y-[25px] lg:p-[50px] p-[10px] py-[50px] rounded-[20px]  connect-back">
          <span className="orbitron text-[#FE5A36] leading-[100%] font-bold text-[36px] md:text-[75px] lg:text-[100px]">
            Have a project in mind?
          </span>
          <br />
          <br />
          <span className="lg:text-[25px] md:text-[20px] text-[14px] open-sans leading-[44px] text-[white]">
          We&apos;d love to hear from you! Fill out the form below or contact us directly.
          </span>{" "}
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
								py-[10px]
								gap-[5px]
								justify-center
								hover:bg-[#FF3D12]
								transition
								duration-300
							"
          >
            <div className="flex gap-2">
              Contact Us
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
}
