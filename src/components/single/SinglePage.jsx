import React from 'react'
import Container from "../container/Container.jsx";
import userIcon from "../../images/Group 9.png"
import banner from "../../images/Banner.png"

const SinglePage = () => {
    return (
        <Container>
            <div className="text-center w-full flex justify-center items-center flex-col">
                <div className="text-5xl font-bold py-5">Blog Title</div>

                <div className="w-[137px] h-9 relative py-7">
                    <div className="w-9 h-9 left-0 top-0 absolute">
                        <div className="w-9 h-9 left-0 top-0 absolute bg-black rounded-[20px]"></div>
                        <img className="w-[31px] h-[31px] left-[3px] top-0 absolute rounded-[20px]" src={userIcon}/>
                    </div>
                    <div className="w-[94px] h-[30px] left-[43px] top-[3px] absolute">
                        <div
                            className="left-0 top-0 absolute text-orange-600 text-xs font-semibold">Husni
                            Ramdani
                        </div>
                        <div className="left-0 top-[18px] absolute text-[8px] font-normal">30 November
                            2021
                        </div>
                    </div>
                </div>

                <div className="w-[35px] h-[5px] relative">
                    <div className="w-[5px] h-[5px] left-0 top-0 absolute bg-black rounded-full"></div>
                    <div className="w-[5px] h-[5px] left-[15px] top-0 absolute bg-black rounded-full"></div>
                    <div className="w-[5px] h-[5px] left-[30px] top-0 absolute bg-black rounded-full"></div>
                </div>

                <div className="py-6">
                    <img className="max-w-[700px]" src={banner} alt=""/>
                </div>

                <div
                    className="w-[558px] h-[300px] text-justify text-lg font-normal">Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor.
                    Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae
                    in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et.<br/>Nibh
                    at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan
                    vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet.
                    Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas
                    pharetra.
                </div>
            </div>
        </Container>
    )
}
export default SinglePage
