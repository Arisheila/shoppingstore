import React from "react"

export default function Footer() {
	return (
		<div>
			<div className="container flex justify-between">
				{/* Secure Payment */}
				<div className="card">
					<p className="text-[#9f9f9f] text-[16px]">
                    400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA
					</p>
				</div>

				{/* Links */}
				<div className="card">
					<h2 className="text-[#9f9f9f] text-[16px]">Links</h2>
					<ul>
						<li className="mb-2">Home</li>
						<li className="mb-2">Shop</li>
						<li className="mb-2">About</li>
						<li className="mb-2">Contact</li>
					</ul>
				</div>

				{/* Free Delivery */}
				<div className="card">
					<h2 className=" text-[#9f9f9f] text-[16px]">Help</h2>
					<ul>
						<li className="mb-2">Payment Options</li>
						<li className="mb-2">Returns</li>
						<li className="mb-2">Privacy Policies</li>
					</ul>
				</div>

				<div className="card">
					<h2 className="text-[#9f9f9f] text-[16px]">Newsletter</h2>
					<p className="mb-2">
						100% secure payment, consectetur <br /> adipim scing elit.
					</p>
				</div>
			</div>
			
          <hr/>
        <div className="text-left mt-4">
        <h1 className="text-lg text-gray-700">
          2022 Meubel House. All rights reserved
        </h1>
      </div>

		</div>
	)
}
