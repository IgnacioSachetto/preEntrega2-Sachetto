import { Link } from "react-router-dom"
import { CartWidget } from "./CardWidget"

const NavBar = (props) =>{

    if (props.isHeader){
        return(
            <>
            <nav className= "barraNav">
                <Link className="headerLink" to="/category/electronics">Electronicos</Link>
                <Link className="headerLink" to="/category/jewelery/">Joyeria</Link>
                <Link className="headerLink" to="/category/men's clothing/">Hombres</Link>
                <Link className="headerLink" to="/category/women's clothing/">Mujeres</Link>
                <CartWidget/>

            </nav>
            </>
        )
    } else {
        return(
            <nav className="footerNav">
                <p className="copy">{props.textLinkFooter2}<a className="redes" href={props.hrefLinkFooter}>{props.textLinkFooter}</a></p>
            </nav>
        )
    }
    
}

export default NavBar