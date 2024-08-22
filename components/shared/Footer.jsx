import Image from 'next/image';
import React from 'react';
import logo from "../../public/images/logo.png";
import logo2 from "../../public/images/logo2.png";
import LinkButton1 from './ButtonLink1';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {

  const [phone, setPhone] = useState(0);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if(window.innerWidth < 1024) setPhone(1);
    return () => {
      window.removeEventListener('resize', handleResize, true);
    }
  }, []);

  const handleResize = (event) => {
    if(event.target.innerWidth < 1024) {
      setPhone(1);
    }
    else setPhone(0);
  }

  return (
    <footer className="pt-12 text-white" style={{background: 'linear-gradient(115.13deg, rgba(57, 57, 57, 0.4) 34.04%, rgba(45, 45, 45, 0.25) 78.97%)', fontFamily: 'Helvetica, Arial, sans-serif'}}>
      <div className="container px-10 mx-auto lg:px-30">
        <div className="flex flex-col justify-between justify-items-stretch lg:flex-row">
          <div className="flex flex-row flex-wrap justify-between w-full mb-6 lg:justify-start lg:flex-col lg:w-1/4"> {/* mainpart */}
            <div className={`flex items-center mb-8 lg:mr-0 ${phone?'mx-auto':''}`}>
              <Image
                src={phone ? logo2 : logo}
                className={`inline ${phone?'w-[137px]':'w-[285px]'} h-[auto]`}
                alt="Logo"
              />
            </div>
            <div className="flex mb-8 text-[16px]">
              <span className={phone ? 'text-center' : ''}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </span>
            </div>
            <div className="flex flex-row items-center justify-between w-full mb-6 lg:mb-0">
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
          <div className="flex">
            <div className={`mb-6 w-full ${phone ? 'justify-items-center' : ''}`}>
              <h3 className={`mb-8 font-semibold lg:text-[32px] text-[20px] ${phone ? 'text-center' : ''}`}>Quick Links</h3>
              <ul>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"Services"} footer={"1"} phone={phone} linkname={"\projects"} newop={1} />
                </li>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"Portfolio"} footer={"1"} phone={phone} linkname={"\partners"} newop={1} />
                </li>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"Team"} footer={"1"} phone={phone} linkname={"\company"} newop={1} />
                </li>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"Contact"} footer={"1"} phone={phone} linkname={"\opportunities"} newop={1} />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div className={`mb-6 w-full ${phone ? 'text-center' : ''}`}>
              <h3 className={`mb-8 font-semibold lg:text-[32px] text-[20px] ${phone ? 'text-center' : ''}`}>Imp Links</h3>
              <ul>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"Terms & Conditions"} footer={"1"} phone={phone} linkname={""} />
                </li>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"Privacy Policy"} footer={"1"} phone={phone} linkname={""} />
                </li>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"Contact"} footer={"1"} phone={phone} linkname={""} />
                </li>
                <li className={`my-6 ${phone ? 'flex justify-center' : ''}`}>
                  <LinkButton1 title={"FAQs"} footer={"1"} phone={phone} linkname={"/opportunities"} newop={1} />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className={`mb-3 font-semibold lg:text-[32px] text-[20px] ${phone ? 'text-center' : ''}`}>Contact</h3>
            <div className="flex flex-col">
              <div className={`flex items-center ${phone ? 'flex-col' : 'lg:my-2 lg:w-full'}`}>
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.58388 9.86395C8.39463 11.3264 9.32906 12.7301 10.5422 14.01C11.7594 15.2978 13.2729 16.4697 15.2321 17.4709C15.3773 17.5416 15.5147 17.5416 15.6384 17.4925C15.8249 17.4218 16.0153 17.2667 16.2018 17.0802C16.3471 16.935 16.5277 16.7033 16.7162 16.4501C17.47 15.4587 18.4024 14.2279 19.7197 14.8443C19.7491 14.858 19.7707 14.8737 19.8002 14.8855L24.1935 17.412C24.2073 17.4199 24.223 17.4336 24.2348 17.4415C24.8139 17.84 25.0534 18.4544 25.0593 19.1513C25.0593 19.86 24.7982 20.657 24.4154 21.3303C23.9089 22.2196 23.1629 22.8085 22.3031 23.1972C21.4845 23.5741 20.5736 23.7763 19.6981 23.9059C18.3239 24.1081 17.0361 23.9785 15.7189 23.5741C14.4311 23.1756 13.1335 22.518 11.7162 21.6425L11.6121 21.5757C10.9623 21.1694 10.2596 20.7355 9.57052 20.2231C7.04992 18.319 4.48024 15.5687 2.80573 12.5416C1.40212 10.0014 0.636519 7.25893 1.05466 4.64606C1.2863 3.21301 1.90075 1.90952 2.97259 1.04969C3.90702 0.295865 5.16536 -0.116383 6.79472 0.0288853C6.98121 0.0426269 7.14807 0.150597 7.23641 0.31157L10.0534 5.07402C10.4657 5.60798 10.5167 6.13801 10.291 6.66804C10.1045 7.10188 9.72757 7.50235 9.21324 7.87534C9.06208 8.0049 8.88148 8.13643 8.69106 8.27385C8.06091 8.73125 7.34438 9.25932 7.58977 9.87965L7.58388 9.86395Z" fill="white"/>
                </svg>

                <div className={`${phone ? 'text-center mt-4' : 'ml-2'}`}>
                  <p className={`font-bold ${phone ? 'text-[18px]' : 'text-[20px]'}`}>Phone</p>
                  <p className={`${phone ? 'text-[14px]' : 'text-[16px]'}`}>+(123) 456 7890</p>
                </div>
              </div>
              <div className={`flex items-center ${phone ? 'flex-col items-center mt-5' : 'lg:my-5 lg:w-full'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.484621 8.70871L22.9456 0.0739441C23.0735 0.010407 23.2178 -0.0129729 23.3593 0.00686937C23.5008 0.0267117 23.633 0.0888501 23.7386 0.185138C23.8441 0.281426 23.9182 0.40737 23.9509 0.546457C23.9837 0.685545 23.9736 0.831284 23.9221 0.964569L15.3284 23.5446C15.2792 23.6745 15.193 23.7871 15.0804 23.8684C14.9678 23.9497 14.8338 23.9961 14.6951 24.002C14.5563 24.0078 14.4189 23.9727 14.2999 23.9012C14.1809 23.8296 14.0855 23.7246 14.0256 23.5993L10.5627 16.4353L17.4358 6.59738L7.61743 13.4509L0.431887 10.0095C0.307115 9.94952 0.202629 9.85434 0.131321 9.73568C0.0600136 9.61702 0.0250037 9.48009 0.0306114 9.34176C0.036219 9.20344 0.0821988 9.06979 0.162878 8.95729C0.243557 8.8448 0.355404 8.75838 0.484621 8.70871Z" fill="white"/>
                </svg>

                <div className={`${phone ? 'text-center mt-4' : 'ml-2'}`}>
                  <p className={`font-bold ${phone ? 'text-[18px]' : 'text-[20px]'}`}>Email</p>
                  <p className={`${phone ? 'text-[14px]' : 'text-[16px]'}`}>email@example.com</p>
                </div>
              </div>
              <div className={`${phone ? 'flex-col items-center mt-5' : 'lg:my-5 lg:w-full'}`}>
                <div className={`flex ${phone ? 'flex-col items-center' : 'items-center'}`}>
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3725 20.7606C12.2807 21.9579 11.0092 23.0301 9.58145 23.8973C9.40567 24.0262 9.16739 24.0419 8.97208 23.9169C6.8627 22.5751 5.09122 20.9637 3.69864 19.2118C1.77676 16.8016 0.567778 14.1298 0.153716 11.5555C-0.268159 8.94616 0.126372 6.43444 1.4252 4.39342C1.93692 3.58678 2.59122 2.85241 3.38809 2.21764C5.22012 0.758656 7.31192 -0.0128288 9.39786 0.0027962C11.4057 0.0184212 13.3881 0.766468 15.101 2.33092C15.7025 2.8778 16.2084 3.50475 16.6225 4.18444C18.019 6.48522 18.3197 9.41881 17.7064 12.3915C17.101 15.329 15.5971 18.3133 13.3725 20.7548V20.7606ZM8.99942 4.64342C11.476 4.64342 13.4818 6.65123 13.4818 9.12584C13.4818 11.6024 11.474 13.6083 8.99942 13.6083C6.52286 13.6083 4.517 11.6024 4.517 9.12584C4.51504 6.64928 6.52286 4.64342 8.99942 4.64342Z" fill="white"/>
                  </svg>
                  <div className={`${phone ? 'text-center mt-4' : 'ml-2'}`}>
                    <p className={`font-bold ${phone ? 'text-[18px]' : 'text-[20px]'}`}>Address</p>
                    <p className={`${phone ? 'text-[14px]' : 'text-[16px]'}`}>Your Address Line Goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-6 mt-6 text-center border-t border-gray-700">
          <p className="text-[20px]">&copy; 2024 <b>relforce</b>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
