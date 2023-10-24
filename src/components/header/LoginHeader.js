/** @format */

import React from "react"
import "./Header.css"
import shoplogo from "../banner/shoplogo.png"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { HiOutlineHeart } from "react-icons/hi"
import { TbUserExclamation } from "react-icons/tb"
import { FaBars } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"

const LoginHeader = () => {
	return (
		<header>
			<nav>
				<ul class="nav-bar">
					<li class="logo">
						<Link to="/">
							<img
								src={shoplogo}
								alt="shop-logo"
								className="banner-content-icon"
							/>
						</Link>
						{/* <a href='#'><img src='./images/logo.png'/></a> */}
					</li>
					<input type="checkbox" id="check" />
					<span class="menu">
						<li className="nav-list">
							<Link className="nav-list-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-list">
							<Link className="nav-list-link" to="/shop">
								Shop
							</Link>
						</li>
						<li className="nav-list">
							<Link className="nav-list-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-list">
							<Link className="nav-list-link" to="/contact">
								Contact
							</Link>
						</li>
						<label for="check" class="close-menu">
							<RxCross2 />
							{/* <i class="fas fa-times"></i> */}
						</label>
					</span>
					<label for="check" class="open-menu">
						{/* <i class="fas fa-bars"></i> */}
						<FaBars />
					</label>
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
