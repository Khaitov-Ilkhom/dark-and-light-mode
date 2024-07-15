import {Switch} from 'antd';
import light from "../../images/light.png"
import dark from "../../images/dark.png"
import {useContext} from "react";
import AppContext from "../../context/store/Index.jsx";
import {Link} from "react-router-dom";


const Navbar = () => {
    const [state, dispatch] = useContext(AppContext)

    const onChange = (checked) => {
        dispatch({type: "CHANGE_THEME", payload: checked ? "light" : "dark"})
    }

    return (
        <nav className="w-full py-5">
            <ul className="w-full flex justify-around items-center">
                <li>
                    <Link to="/">
                        <img className="max-w-[120px]" src={state.theme === "light" ? light : dark} alt="Logo"/>
                    </Link>
                </li>
                <li className="text-2xl font-bold"><Link to="/single">Latest Updates</Link></li>
                <li>
                    <Switch defaultChecked onChange={onChange}/>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
