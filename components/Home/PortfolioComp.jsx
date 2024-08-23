import Image from "next/image";
import port1 from '../../public/images/port1.png'
import port2 from '../../public/images/port22.png';
import port3 from '../../public/images/port3.png';
import port4 from '../../public/images/port4.png';

const rotatingImages = [port1, port2, port3, port4];

export default function PortfolioComp() {
    return (
        <div
            className="bg-local"
            style={{
                backgroundImage: `
                linear-gradient(180deg, rgba(11, 10, 10, 0) 72.38%, rgba(11, 10, 10, 0.7) 100%),
                url(/images/back3.png)
                `,
                paddingBottom: '80px',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="absolute w-[300px] h-[300px] bg-[#FE5A36] blur-[150px] z-10" />
            <div className="container relative flex flex-col py-[100px] mx-auto">
                <div className="flex flex-col mb-10 lg:flex-row">
                    <div
                        className="flex w-full lg:justify-normal lg:mb-0 mb-5 lg:text-left text-center justify-center lg:w-[60%] text-[24px] lg:text-[60px] orbitron leading-tight font-bold text-transparent"
                        style={{
                            background:
                                "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
                            backgroundClip: "text",
                        }}
                    >
                        Our Work Speaks<br />Louder Than Words
                    </div>
                    <div className="px-10 lg:px-0 flex w-full lg:w-[40%] lg:text-left text-center text-[8px] lg:text-[20px] open-sans text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </div>
                <div className="mb-10 rotating-images-container">
                    <div className="images-wrapper">
                        {rotatingImages.concat(rotatingImages).map((src, index) => (
                        <div key={index} className="image-container">
                            <Image src={src} alt={`Logo ${index + 1}`} layout="responsive" objectFit="contain" />
                        </div>
                        ))}
                    </div>
                    <style jsx>{`
                        .rotating-images-container {
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                        height: auto;
                        }

                        .images-wrapper {
                        display: flex;
                        animation: rotateImages 20s linear infinite;
                        }

                        .image-container {
                        flex: 0 0 calc(100% / 3);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0 15px;
                        }

                        @keyframes rotateImages {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-100%));
                        }
                        }

                        @media (max-width: 600px) {
                        .image-container {
                            flex: 0 0 calc(100% / 1);
                        }
                        }

                        @media (min-width: 601px) {
                        .image-container {
                            flex: 0 0 calc(100% / 4);
                        }
                        }
                    `}</style>
                </div>

                <div className="flex justify-center">
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
                            View more project!
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
    )
}
