import React from 'react'
import { NavLink } from "react-router-dom"

const style = {
    color: 'yellow',
    fontWeight: 'bold'
}

const Nav = () => {
    return (
        <div>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
            <NavLink activeStyle={style} exact to="/">Home</NavLink>
            <NavLink activeStyle={style} to="/about">About</NavLink>
            <NavLink activeStyle={style} to="/contact">Contact</NavLink>
            <NavLink activeStyle={style} to="/posts">Post</NavLink>

        </div>
    )
}

export default Nav
