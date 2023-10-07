import {createGlobalStyle} from "styled-components";
// import banner.png from "./img/banner.png"

const GlobalStyles =createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  padding: 38px 0;
  display: flex;
  width: 85%;
  justify-content: space-between;
  margin: 0 auto;
}
header .nav-list {
  display: flex;
  gap: 75px;
}
header .nav-list .nav-list-items {
  list-style: none;
}
header .nav-list .nav-list-items .nav-list-items-links {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
}
header .nav-icons .nav-icon-list {
  display: flex;
  list-style: none;
  gap: 10px;
}
/* Banner Component CSS */
.banner {
  background-image: url(${require('./img/banner.png')}); /* Import the background image dynamically */
  // background-image: url(./img/banner.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 316px;
  text-align: center;
}

.banner .banner-content .banner-content-title {
  color: black;
  font-size: 48px;
  font-family: Poppins;
  font-weight: 500;
}


.banner .banner-content small .breadcrumbs {
  display: flex;
  gap: 20px;
  color: black;
}

.banner .banner-content small .breadcrumbs li {
  list-style: none;
}

.banner .banner-content small .breadcrumbs li a {
  font-size: 16px;
}

/* PRODUCT CSS */
.products {
  width: 85%;
  margin: 0 auto;
}

.products .product-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 78px 0;
}
.product-img {
  height: 150px;
  width: 200px;
}

.product-col {
  text-align: center;
  flex: 0 0 calc(25% - 16px);
  margin-bottom: 50px;
}
.product-col .product-title {
  font-family: Poppins;
  font-weight: 400;
  margin-top: 10px;
}
.product-col .product-price {
  font-size: 24px;
  font-family: Poppins;
  font-weight: 500;
  margin-top: 10px;
}

.products .products-pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.products .products-pagination div {
  display: flex;
  gap: 38px;
}
.products .products-pagination div .products-pagination-btn {
  padding: 10px 15px;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  background-color: #fbebb5;
  cursor: pointer;
}

// active Pagination page 

.active-page {
  background-color: #f0f0f0;
  font-weight: bold;
}

// footer.css
.footer{
  border-top: 1px solid #9f9f9f;
  width: 50%;
}

.breadcrumbs-item{
  list-style:none;

}

// login Part
// Delivery
.deliveryLayout{
  background: #FAF4F4;
  width: 1440px;
height: 300px;
top: 1176px;
}
// login part
.login-container{
width: 608px;
height: 630px;
 top: 479px;
left: 100px;
 }
 input{
  font-family: Poppins;
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
  letter-spacing: 0em;
   text-align: left;
   border: 1px solid #9F9F9F
 }
.layout-register{
  width: 608px
   height: 630px
  top: 479px
   left: 100px
}
.card{
  width: 376px
height: 108px
top: 1272px
left: 944px
}
h2{
  margin-top:100px;
}
.card-image-text{
  font-family: Poppins;
font-size: 32px;
 font-weight: 500;
line-height: 48px;
letter-spacing: 0em;
text-align: left;
}
.card-image-para{
 font-family: Poppins;
 font-size: 20px;
font-weight: 400;
 line-height: 30px;
 letter-spacing: 0em;
 text-align: left;
}

.delivery-container{
  width: 1240.01px;
 height: 419px;
 top: 1574px;
 left: 100px;
}
.delivery-container-entire{
  display:flex;
  width: 1131px;
 height: 312px;
 top: 1574px;
 left: 102.01px;
 border: 1px;

//   text 
 font-family: Poppins;
font-size: 16px;
 font-weight: 400;
 line-height: 24px;
 letter-spacing: 0em;
 text-align: left;
}

.link{
   width: 68px;
   height: 312px;
   top: 1574px;
   left: 523.01px;
   color:#9f9f9f;
} 
.help {
  width: 140px;
  height: 242px;
  top: 1574px;
  left: 735.01px;
}



@media only screen and (max-width: 600px) {
  

}



`;
export default GlobalStyles;