/** @format */

import shoplogo from "../banner/shoplogo.png"
import arrow from "../banner/bannerArrow.png"

const LoginBanner = () => {
	return (
		<div className="banner">
			<div className="home flex items-center justify-center flex-col gap-6 h-[316px]">
				<div>
					<img src={shoplogo} alt="shop-logo" className="banner-content-icon" />
				</div>
				<h3 className="text-black">My Account</h3>
				<div className="flex gap-6">
					<h4 className="text-black">Home</h4>
					<img src={arrow} alt="Left-Arrow" />
					<p className="text-black">My Account </p>
				</div>
			</div>
		</div>
	)
}

export default LoginBanner
