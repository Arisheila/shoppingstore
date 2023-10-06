/** @format */

import React from "react"
import shoplogo from "./login/shoplogo.png"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { HiOutlineHeart } from "react-icons/hi"
import { TbUserExclamation } from "react-icons/tb"

const Header = () => {
	return (
		<header>
			<div className="header-logo">
				<Link to="/">
					<img src={shoplogo} alt="shop-logo" className="banner-content-icon" />
				</Link>
			</div>
			<nav>
				<ul className="nav-list">
					<li className="nav-list-items">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-list-items">
						<Link to="/shop">Shop</Link>
					</li>
					<li className="nav-list-items">
						<Link to="/about">About</Link>
					</li>
					<li className="nav-list-items">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<div className="nav-icons">
				<ul className="nav-icon-list">
					<li className="nav-icon-list">
						<TbUserExclamation />
					</li>
					<li className="nav-icon-list">
						<AiOutlineSearch />
					</li>
					<li className="nav-icon-list">
						<HiOutlineHeart />
					</li>
					<li className="nav-icon-list">
						<AiOutlineShoppingCart />
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
