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

// login Part
// Delivery
.deliveryLayout{
  background: #FAF4F4;
  width: 1440px;
height: 300px;
top: 1176px;
}
// login part

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
 border: 1px;}

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

// .form-container{
//  ; display: flex;
//   grid-template-columns: 1fr 1fr;
// }
// .containers {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-column-gap: 10px; /* Adjust the gap between columns as needed */
//   width: 608px;
//   height: 630px;
//   position: absolute;
//   top: 479px;
//   left: 100px;
// }

// .form-container{
//   display: flex;
//   justify-content: space-between; /* Adjust as needed for your layout */
//   margin: 0 auto;
//   width: 60%;
//   padding: 90px 0px;
// }

.form-container{
  display: flex;
}

@media only screen and (max-width: 500px) {
    .deliveryLayout {
      padding: 1rem; /* Add padding to the entire section for spacing */
    }
  
    .card-image {
      width: 100%; /* Set the width to 100% for each card */
      margin-bottom: 1rem; /* Add some bottom margin for spacing */
    }
    .form-container{display:block;}
  }

  





`;
export default GlobalStyles;