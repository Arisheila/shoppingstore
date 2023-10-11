/** @format */

import shoplogo from "./shoplogo.png"
import arrow from "./bannerArrow.png"

const Banner = () => {
	return (
		<div className="banner">
			<div className="home flex items-center justify-center flex-col gap-6 h-[316px]">
				<div>
					<img src={shoplogo} alt="shop-logo" className="banner-content-icon" />
				</div>
				<h3 className="banner-content-title text-black">Shop</h3>
				<div className="flex gap-6">
					<h4 className="text-base text-black">Home</h4>
					<img src={arrow} alt="Left-Arrow" />
					<p className="text-base text-black ">Shop</p>
				</div>
			</div>
		</div>
	)
}

export default Banner