import { useState } from 'react';

const AnswerItem = ({title}) => {
    const {open, setOpen} = useState(0);

    return (
        <div className="flex flex-col p-5 rounded-[9.6px]"
            style={{background: 'linear-gradient(180deg, rgba(101, 101, 101, 0.32) 0%, rgba(108, 108, 108, 0.2) 100%)'}}
        >
            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center justify-between">
                    <span className="orbitron text-[12px] lg:text-[18px] text-white font-bold">{title}</span>
                    {
                        open ? 
                        <div className="cursor-pointer">
                            <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.65603 12.1497C2.16639 12.625 1.3862 12.6142 0.91091 12.1264C0.43562 11.6385 0.446381 10.8565 0.934226 10.3812L10.7611 0.852134L11.622 1.73635L10.7611 0.848548C11.2525 0.373258 12.0345 0.385813 12.5098 0.875451C12.5241 0.889799 12.5367 0.904148 12.5492 0.918496L22.2254 10.3812C22.7151 10.8565 22.7258 11.6385 22.2505 12.1264C21.7752 12.6142 20.9933 12.6268 20.5054 12.1497L11.6184 3.45816L2.65603 12.1497Z" fill="white"/>
                            </svg>
                        </div> :
                        <div className="cursor-pointer">
                            <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.65603 0.850315C2.16639 0.375025 1.3862 0.385786 0.91091 0.873631C0.43562 1.36148 0.446381 2.14346 0.934226 2.61875L10.7611 12.1479L11.622 11.2636L10.7611 12.1515C11.2525 12.6267 12.0345 12.6142 12.5098 12.1245C12.5241 12.1102 12.5367 12.0959 12.5492 12.0815L22.2254 2.61875C22.7151 2.14346 22.7258 1.36148 22.2505 0.873631C21.7752 0.385786 20.9933 0.373232 20.5054 0.850315L11.6184 9.54184L2.65603 0.850315Z" fill="white"/>
                            </svg>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AnswerItem;