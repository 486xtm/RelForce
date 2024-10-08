import Image from "next/image";

export default function ClientsComp () {
    return (
        <div
            className="bg-local lg:w-full w-[70%] lg:rounded-none my-[50px] rounded-[24px] mx-auto "
            style={{
                background:
                'linear-gradient(180deg, rgba(101, 101, 101, 0.32) 0%, rgba(108, 108, 108, 0.2) 100%), linear-gradient(133.47deg, rgba(11, 10, 10, 0) 34.97%, #0B0A0A 111.88%)',
                '@media (min-width: 1024px)': {
                    background: 'none',
                },
            }}
        >
        <div
            className="container  flex flex-col mx-auto lg:w-full w-[70%] bg-local lg:rounded-none rounded-[24px]"
        >
                
                <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
                    <div className="flex justify-center">
                        <Image 
                            src={'/images/client1.svg'} 
                            width={300} 
                            height={120} 
                            className="lg:w-[300px] lg:h-[120px] w-[162px] h-[65px]" 
                            alt="Client 1"
                        />
                    </div>
                    <div className="flex justify-center">
                    <Image 
                        src={'/images/client2.svg'} 
                        width={300} 
                        height={120} 
                        className="lg:w-[300px] lg:h-[120px] w-[162px] h-[65px]" 
                        alt="Client 2"
                    />
                    </div>
                    <div className="flex justify-center">
                    <Image 
                        src={'/images/client3.svg'} 
                        width={300} 
                        height={120} 
                        className="lg:w-[300px] lg:h-[120px] w-[162px] h-[65px]" 
                        alt="Client 3"
                    />
                    </div>
                    <div className="flex justify-center">
                    <Image 
                        src={'/images/client4.svg'} 
                        width={300} 
                        height={120} 
                        className="lg:w-[300px] lg:h-[120px] w-[162px] h-[65px]" 
                        alt="Client 4"
                    />
                    </div>
                    <div className="flex justify-center mb-5 lg:mb-0">
                    <Image 
                        src={'/images/client5.svg'} 
                        width={300} 
                        height={120} 
                        className="lg:w-[300px] lg:h-[120px] w-[162px] h-[65px]" 
                        alt="Client 5"
                    />
                    </div>

                </div>
            </div>
         </div>
    )
}
