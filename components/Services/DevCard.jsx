import { useState } from 'react';

const DevCard = ({title}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div clasName="flex flex-col lg:w-[4/13] w-full justify-center border-2 border-white flex transition-all expertise"
            style={{background: 'rgba(33, 33, 33)', borderRadius: '12px'}}
        >
            <div className='flex justify-center orbitron mt-5 text-[white] text-center text-[24px] lg:text-[45px] font-semibold px-15'>
                {title}
            </div>
            <div className='flex flex-col px-5 my-10 open-sans items-center justify-center text-[white] text-[16px] lg:text-[24px] text-center'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                
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
                    lg:py-[10px]
                    py-[7px]
                    text-[9px]
                    lg:text-[16px]
                    gap-[5px]
                    justify-center
                    hover:bg-[#FF3D12]
                    transition
                    duration-300
                    items-center
                    flex
                    mt-5
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
    )
}

export default DevCard;