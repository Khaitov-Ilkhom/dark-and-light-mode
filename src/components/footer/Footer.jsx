import {useContext} from 'react'
import AppContext from "../../context/store/Index.jsx";
import icon1 from "../../images/Group 3.png"
import icon2 from "../../images/Group 2.png"
import icon3 from "../../images/Group 4.png"

import icon4 from "../../images/Group 3 (1).png"
import icon5 from "../../images/Group 2 (1).png"
import icon6 from "../../images/Group 4 (1).png"

const Footer = () => {

    const [state] = useContext(AppContext)

    return (
        <div className="w-full flex justify-around items-center">
            <div>
                <span className=" text-sm font-semibold">Thanks for </span>
                <span className="text-orange-600 text-sm font-semibold underline">coming!</span>
            </div>

            <div className=" text-sm font-semibold underline">gblog@gmail.com</div>

            <div>
                {
                    state.theme === "light" ?
                        <div className="flex justify-around items-center gap-3">
                            <img className="max-w-[30px]" src={icon1} alt=""/>
                            <img className="max-w-[30px]" src={icon2} alt=""/>
                            <img className="max-w-[30px]" src={icon3} alt=""/>
                        </div>
                        :
                        <div className="flex justify-around items-center gap-3">
                            <img className="max-w-[30px]" src={icon4} alt=""/>
                            <img className="max-w-[30px]" src={icon5} alt=""/>
                            <img className="max-w-[30px]" src={icon6} alt=""/>
                        </div>
                }
            </div>
        </div>
    )
}
export default Footer
