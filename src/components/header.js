import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Header } from "./header.module.css"

const Header = () => {
    const triggerNavigation =() => {
        navigate('/about')
    }
    return (
        <header>
        <div>
            <h1><Link to="/">Miles Cunningham</Link></h1>
            <h3>Miles's Website!</h3>
            <button onClick={() => triggerNavigation()}>Learn More</button>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
        </header>
    )
}
export default Header