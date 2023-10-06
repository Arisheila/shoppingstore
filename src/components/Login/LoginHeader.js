/** @format */

import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { HiOutlineHeart } from "react-icons/hi"
import { TbUserExclamation } from "react-icons/tb"

const LoginHeader = () => {
	return (
		<header>
			<nav>
				<ul className="nav-list">
					<li className="nav-list-items">
						<Link to="/" className="text-black">Home</Link>
					</li>
					<li className="nav-list-items">
						<Link to="/shop" className="text-black">Shop</Link>
					</li>
					<li className="nav-list-items">
						<Link to="/about" className="text-black">About</Link>
					</li>
					<li className="nav-list-items">
						<Link to="/contact" className="text-black">Contact</Link>
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

export default LoginHeader
