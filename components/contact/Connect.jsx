import React from "react";
import Link from "next/link";
export default function Connect() {
  return (
    <div
      className="h-[auto] bg-cover orbitron "
      style={{
        backgroundImage: `url(/images/back5.png)`,
      }}
    >
      <div className="lg:py-[150px] py-[75px] container mx-auto">
        <div className="lg:w-4/5 w-full  text-center mx-auto space-y-[25px] lg:p-[50px] p-[10px] py-[50px] rounded-[10px]  connect-back">
          <div
            className="lg:text-[60px] text-[30px] font-bold text-transparent "
            style={{
              background:
                "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
              backgroundClip: "text",
            }}
          >
            Have a project in mind?
          </div>
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
              Submit
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
          <hr className="lg:w-3/4 w-full mx-auto border-gray-400" />
          <div className="flex flex-row items-center justify-between lg:w-1/2 mx-auto mb-6 lg:mb-0">
              <div className='flex'>
                <Link href="">
                  <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2023 29.4075V16.285H14.6293L15.2873 11.1471H10.2023V7.87452C10.2023 6.39192 10.6153 5.37683 12.7432 5.37683H15.4394V0.796138C14.1275 0.655548 12.8089 0.587665 11.4895 0.5928C7.57649 0.5928 4.88987 2.98161 4.88987 7.36698V11.1375H0.491699V16.2754H4.89948V29.4075H10.2023Z" fill="white"/>
                  </svg>
                </Link>
              </div>
              <div className='flex'>
                <Link href="">
                  <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3546 3.90654C33.1633 3.19571 32.7886 2.54759 32.2681 2.02707C31.7475 1.50655 31.0994 1.13187 30.3886 0.940534C27.7708 0.232056 17.2517 0.232056 17.2517 0.232056C17.2517 0.232056 6.73261 0.232056 4.11484 0.940534C3.40401 1.13187 2.7559 1.50655 2.23537 2.02707C1.71485 2.54759 1.34017 3.19571 1.14884 3.90654C0.66004 6.57626 0.422841 9.28596 0.440357 12C0.422841 14.7141 0.66004 17.4238 1.14884 20.0935C1.34017 20.8043 1.71485 21.4524 2.23537 21.9729C2.7559 22.4935 3.40401 22.8681 4.11484 23.0595C6.73261 23.768 17.2517 23.768 17.2517 23.768C17.2517 23.768 27.7708 23.768 30.3886 23.0595C31.0994 22.8681 31.7475 22.4935 32.2681 21.9729C32.7886 21.4524 33.1633 20.8043 33.3546 20.0935C33.8434 17.4238 34.0806 14.7141 34.0631 12C34.0806 9.28596 33.8434 6.57626 33.3546 3.90654ZM13.8894 17.0434V6.9566L22.6193 12L13.8894 17.0434Z" fill="white"/>
                  </svg>
                </Link>
              </div>
              <div className='flex'>
                <Link href="">
                  <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.2412 2.76068C27.8998 1.68987 25.4285 0.929979 22.89 0.500348C22.5454 1.11772 22.2299 1.76362 21.9513 2.41439C20.601 2.21068 19.2375 2.10816 17.8719 2.10769C16.5086 2.10769 15.1386 2.21129 13.792 2.41175C13.5171 1.76258 13.1976 1.1189 12.851 0.5C10.3159 0.932223 7.8382 1.69648 5.49819 2.76514C0.845672 9.64787 -0.415165 16.3586 0.215219 22.974C2.93956 24.9862 5.98865 26.5166 9.23005 27.4987C9.95694 26.5174 10.6081 25.4729 11.161 24.3858C10.1062 23.9927 9.08833 23.507 8.11929 22.9342C8.3743 22.7493 8.62367 22.5588 8.86462 22.3737C11.6823 23.6971 14.7611 24.3874 17.876 24.3874C20.9911 24.3874 24.0699 23.6971 26.8877 22.3735C27.1315 22.5725 27.3808 22.763 27.633 22.934C26.662 23.5078 25.6423 23.9949 24.5857 24.3894C25.1405 25.4789 25.7864 26.5194 26.5167 27.5C29.761 26.521 32.8126 24.9907 35.5376 22.976L35.5368 22.9768C36.2766 15.305 34.2731 8.65595 30.2412 2.76068ZM11.9583 18.9056C10.2015 18.9056 8.75002 17.3113 8.75002 15.3498C8.75002 13.3885 10.151 11.7802 11.9527 11.7802C13.7544 11.7802 15.1945 13.3885 15.1637 15.3498C15.1329 17.3113 13.7488 18.9056 11.9583 18.9056ZM23.7938 18.9056C22.0341 18.9056 20.5884 17.3113 20.5884 15.3498C20.5884 13.3885 21.9893 11.7802 23.7938 11.7802C25.5982 11.7802 27.0272 13.3885 26.9964 15.3498C26.9656 17.3113 25.5843 18.9056 23.7938 18.9056Z" fill="white"/>
                  </svg>
                </Link>
              </div>
              <div className='flex'>
                <Link href="">
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8202 0.567993H22.3526L14.6374 9.38395L23.7135 21.3821H16.6087L11.04 14.1071L4.67568 21.3821H1.13829L9.38887 11.9507L0.687988 0.567993H7.97291L13.0013 7.21749L18.8202 0.567993ZM17.5794 19.2706H19.5357L6.90719 2.56935H4.80577L17.5794 19.2706Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.687988 0.567993H8.03574L13.0531 7.2029L18.8593 0.567993H22.4581L14.72 9.41012L23.8142 21.4321H16.6468L11.0891 14.1716L4.73742 21.4321H1.13355L9.40694 11.9746L0.687988 0.567993ZM0.788981 0.618027L9.47155 11.9768L1.2438 21.3821H4.71471L11.0917 14.0927L16.6715 21.3821H23.7135L14.6556 9.40782L22.3479 0.618027H18.882L13.0503 7.28211L8.01085 0.618027H0.788981ZM4.80577 2.56935H6.97002L19.6364 19.3207H17.6174L4.80577 2.56935ZM4.90678 2.61938L17.6421 19.2706H19.5357L6.94513 2.61938H4.90678Z" fill="white"/>
                  </svg>
                </Link>
              </div>
              <div className='flex'>
                <Link href="">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8107 9.99787C13.0563 9.99787 10.8086 12.2456 10.8086 15C10.8086 17.7544 13.0563 20.0021 15.8107 20.0021C18.5651 20.0021 20.8128 17.7544 20.8128 15C20.8128 12.2456 18.5651 9.99787 15.8107 9.99787ZM30.8133 15C30.8133 12.9286 30.8321 10.876 30.7158 8.80832C30.5994 6.40669 30.0516 4.27525 28.2954 2.51907C26.5354 0.759128 24.4078 0.215011 22.0061 0.098682C19.9347 -0.0176466 17.8821 0.00111617 15.8145 0.00111617C13.7431 0.00111617 11.6904 -0.0176466 9.62277 0.098682C7.22115 0.215011 5.08971 0.762881 3.33352 2.51907C1.57358 4.27901 1.02946 6.40669 0.913135 8.80832C0.796807 10.8797 0.815569 12.9324 0.815569 15C0.815569 17.0676 0.796807 19.124 0.913135 21.1917C1.02946 23.5933 1.57733 25.7247 3.33352 27.4809C5.09346 29.2409 7.22115 29.785 9.62277 29.9013C11.6942 30.0176 13.7468 29.9989 15.8145 29.9989C17.8859 29.9989 19.9385 30.0176 22.0061 29.9013C24.4078 29.785 26.5392 29.2371 28.2954 27.4809C30.0553 25.721 30.5994 23.5933 30.7158 21.1917C30.8359 19.124 30.8133 17.0714 30.8133 15ZM15.8107 22.6964C11.5516 22.6964 8.11425 19.2591 8.11425 15C8.11425 10.7409 11.5516 7.30355 15.8107 7.30355C20.0698 7.30355 23.5071 10.7409 23.5071 15C23.5071 19.2591 20.0698 22.6964 15.8107 22.6964ZM23.8224 8.7858C22.8279 8.7858 22.0249 7.98276 22.0249 6.98834C22.0249 5.99392 22.8279 5.19087 23.8224 5.19087C24.8168 5.19087 25.6198 5.99392 25.6198 6.98834C25.6201 7.22447 25.5738 7.45834 25.4836 7.67655C25.3934 7.89476 25.261 8.09303 25.094 8.26C24.9271 8.42697 24.7288 8.55936 24.5106 8.64958C24.2924 8.73981 24.0585 8.7861 23.8224 8.7858Z" fill="white"/>
                  </svg>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
