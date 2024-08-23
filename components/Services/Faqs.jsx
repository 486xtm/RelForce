import AnswerItem from "./AnswerItem";

const Faqx = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-[150px] overflow-hidden text-center">
            <div className="top-0 right-0 absolute w-[300px] h-[300px] bg-[#FE5A36] blur-[150px] z-10 " />
            <div className="container flex flex-col items-center justify-center px-0 mx-auto">
                <div className="w-[70%] mb-10">
                    <span className="orbitron text-[#FE5A36] leading-[100%] font-bold text-[24px] lg:text-[72px]">
                        Find Answers to Your Questions
                    </span>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <button
                        className="
                            orbitron
                            text-[#FFF]
                            leading-[20px]
                            bg-[#FE5A36]
                            border-[#FE5A36]
                            border-2
                            rounded-[5px]
                            px-10
                            lg:py-[10px]
                            py-[7px]
                            text-[11px]
                            lg:text-[20px]
                            gap-[5px]
                            justify-center
                            hover:bg-[#FF3D12]
                            transition
                            duration-300
                            items-center
                            flex
                            mb-5
                            lg:mb-[50px]
                            lg:mr-5
                        "
                    >
                        <div className="flex gap-2">
                            General Inquiries
                        </div>
                    </button>

                    <button
                        className="
                            orbitron
                            text-[#FFF]
                            leading-[20px]
                            border-white
                            border-2
                            rounded-[5px]
                            px-10
                            lg:py-[10px]
                            py-[7px]
                            text-[11px]
                            lg:text-[20px]
                            gap-[5px]
                            justify-center
                            hover:bg-[#1f1e1e]
                            transition
                            duration-300
                            items-center
                            flex
                            mb-5
                            lg:mb-[50px]
                            lg:mr-5
                        "
                    >
                        <div className="flex gap-2">
                            Website Design
                        </div>
                    </button>

                    <button
                        className="
                            orbitron
                            text-[#FFF]
                            leading-[20px]
                            border-white
                            border-2
                            rounded-[5px]
                            px-10
                            lg:py-[10px]
                            py-[7px]
                            text-[11px]
                            lg:text-[20px]
                            gap-[5px]
                            justify-center
                            hover:bg-[#1f1e1e]
                            transition
                            duration-300
                            items-center
                            flex
                            mb-5
                            lg:mb-[50px]
                            lg:mr-5
                        "
                    >
                        <div className="flex gap-2">
                            E-commerce
                        </div>
                    </button>
                    
                    <button
                        className="
                            orbitron
                            text-[#FFF]
                            leading-[20px]
                            border-white
                            border-2
                            rounded-[5px]
                            px-10
                            lg:py-[10px]
                            py-[7px]
                            text-[11px]
                            lg:text-[20px]
                            gap-[5px]
                            justify-center
                            hover:bg-[#1f1e1e]
                            transition
                            duration-300
                            items-center
                            flex
                            mb-5
                            lg:mb-[50px]
                        "
                    >
                        <div className="flex gap-2">
                            App Development
                        </div>
                    </button>
                </div>
                <div className="flex flex-col w-full space-y-5">
                    <AnswerItem title={"What is your design process?"} />
                    <AnswerItem title={"How long does it take to create a website?"} />
                    <AnswerItem title={"What e-commerce platforms do you work with?"} />
                    <AnswerItem title={"Can you help with product photography?"} />
                    <AnswerItem title={"What are your business hours?"} />
                </div>
            </div>
        </div>
    )
}

export default Faqx;