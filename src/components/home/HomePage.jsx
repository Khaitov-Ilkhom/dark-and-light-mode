import React from 'react'
import userIcon from "../../images/Group 9.png"
import cardImg from "../../images/Rectangle 7.png"
import cardImg2 from "../../images/Rectangle 8.png"
import cardImg3 from "../../images/Rectangle 9.png"

const HomePage = () => {
    return (
        <div className="w-full grid grid-cols-4 gap-2 px-[100px] my-5">
           <div className="px-3">
               <div className="text-3xl font-bold">
                   Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit.
               </div>
               <p className="text-[10px] font-normal py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <div className="w-[137px] h-9 relative">
                   <div className="w-9 h-9 left-0 top-0 absolute">
                       <div className="w-9 h-9 left-0 top-0 absolute bg-black rounded-lg"></div>
                       <img className="w-[31px] h-[31px] left-[3px] top-[5px] absolute" src={userIcon} alt="UserIcon"/>
                   </div>
                   <div className="w-[94px] h-[30px] left-[43px] top-[3px] absolute">
                       <div className="left-0 top-0 absolute text-xs font-semibold font-['Poppins']">Husni Ramdani</div>
                       <div className="left-0 top-[18px] absolute text-[8px] font-normal font-['Poppins']">30 November 2021</div>
                   </div>
               </div>
               <div className="text-3xl font-bold pt-3">
                   Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit.
               </div>
               <p className="text-[10px] font-normal py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

           </div>
            <div className="px-3">
                <div>
                    <img src={cardImg} alt=""/>
                </div>
                <div className="text-3xl font-bold pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit.
                </div>
                <p className="text-[10px] font-normal py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="w-[137px] h-9 relative">
                    <div className="w-9 h-9 left-0 top-0 absolute">
                        <div className="w-9 h-9 left-0 top-0 absolute bg-black rounded-lg"></div>
                        <img className="w-[31px] h-[31px] left-[3px] top-[5px] absolute" src={userIcon} alt="UserIcon"/>
                    </div>
                    <div className="w-[94px] h-[30px] left-[43px] top-[3px] absolute">
                        <div className="left-0 top-0 absolute text-xs font-semibold font-['Poppins']">Husni Ramdani</div>
                        <div className="left-0 top-[18px] absolute text-[8px] font-normal font-['Poppins']">30 November 2021</div>
                    </div>
                </div>
            </div>
            <div className="px-3">
                <div>
                    <img className="max-w-[250px]" src={cardImg2} alt=""/>
                </div>
                <div className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
                <p className="text-[10px] font-normal py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div>
                    <img className="max-w-[250px]" src={cardImg3} alt=""/>
                </div>
                <div className="text-xl font-bold pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
                <p className="text-[10px] font-normal py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>
            <div className="px-3">
                <div className="text-3xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit.
                </div>
                <p className="text-[10px] font-normal py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="w-[137px] h-9 relative">
                    <div className="w-9 h-9 left-0 top-0 absolute">
                        <div className="w-9 h-9 left-0 top-0 absolute bg-black rounded-lg"></div>
                        <img className="w-[31px] h-[31px] left-[3px] top-[5px] absolute" src={userIcon} alt="UserIcon"/>
                    </div>
                    <div className="w-[94px] h-[30px] left-[43px] top-[3px] absolute">
                        <div className="left-0 top-0 absolute text-xs font-semibold font-['Poppins']">Husni Ramdani</div>
                        <div className="left-0 top-[18px] absolute text-[8px] font-normal font-['Poppins']">30 November 2021</div>
                    </div>
                </div>
                <div className="text-3xl font-bold pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit.
                </div>
                <p className="text-[10px] font-normal py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="w-[137px] h-9 relative">
                    <div className="w-9 h-9 left-0 top-0 absolute">
                        <div className="w-9 h-9 left-0 top-0 absolute bg-black rounded-lg"></div>
                        <img className="w-[31px] h-[31px] left-[3px] top-[5px] absolute" src={userIcon} alt="UserIcon"/>
                    </div>
                    <div className="w-[94px] h-[30px] left-[43px] top-[3px] absolute">
                        <div className="left-0 top-0 absolute text-xs font-semibold font-['Poppins']">Husni Ramdani</div>
                        <div className="left-0 top-[18px] absolute text-[8px] font-normal font-['Poppins']">30 November 2021</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage
