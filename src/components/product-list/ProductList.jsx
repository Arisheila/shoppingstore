/** @format */

import React, { useState } from "react"
import { Link } from "react-router-dom"
import products from "./ProductData"
import Banner from "../banner/Banner"
import FooterMain from "../Footer/Footer"

const ProductList = () => {
	// Pagination Part
	const productsPerPage = 15 // Number of products to display per page
	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = Math.ceil(products.length / productsPerPage)

	const startIndex = (currentPage - 1) * productsPerPage
	const endIndex = Math.min(startIndex + productsPerPage, products.length)

	const currentProducts = products.slice(startIndex, endIndex)

	const handlePaginationClick = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
	}

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
	}

	return (
		<>

			<Banner />

			<div className="products">
				<div className="product-row">
					{currentProducts.map((product) => (
						<div className="product-col" key={product.id}>
							<Link to={`/shop/${product.id}`}>
								<img src={product.image} alt="" className="product-img" />
							</Link>
							<p className="product-title">{product.title}</p>
							<p className="product-price">{product.price}</p>
						</div>
					))}
				</div>
				{/* Pagination part  */}
				<div className="products-pagination">
					<div>
						<button
							className={`products-pagination-btn ${
								currentPage === 1 ? "active-page" : ""
							}`}
							onClick={handlePrevPage}
							disabled={currentPage === 1}
						>
							Prev
						</button>
						{[...Array(totalPages)].map((value, index) => (
							<div
								key={index}
								className={`products-pagination-btn ${
									index + 1 === currentPage ? "active-page" : ""
								}`}
								onClick={() => handlePaginationClick(index + 1)}
							>
								{index + 1}
							</div>
						))}
						<button
							className={`products-pagination-btn ${
								currentPage === totalPages ? "active-page" : ""
							}`}
							onClick={handleNextPage}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</div>
				</div>
			</div>

			<FooterMain />
		</>
	)
}

export default ProductList
