import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> karry. 
                    </a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+91 7018343317</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>karankhatri1295@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="Line1"></span>
                        <span className="Line1"></span>
                        <span className="Line1"></span>
                        </div>
                </div>
            </div>
        </div>
    )
}
