import React, {useState}from 'react';
import { useParams } from 'react-router-dom';
import products from '../product-list/ProductData';
import Header from '../header/Header';
import Footer from './Footer';
import Rating  from './icons/Rating';
import BreadCrumbs from './BreadCrumbs';
import {BsBalloonHeart} from "react-icons/bs"



export default function SingleItem() {

  // selecting product count 
  const [itemCount, setItemCount] = useState(0);

  // selecting single item product

  const { id } = useParams();
  const integerId = parseInt(id);
  const currentProduct = products.find((item) => item.id === integerId);

  if (!currentProduct) {
    return <div>Product not available!</div>;
  }

  return (
<main>
      <Header />
      <section className="max-w-7xl mx-auto mt-8 pb-10">
        <BreadCrumbs />
        <div className="flex flex-col items-end justify-end">
          <div className="flex flex-col md:flex-row gap-20 mt-10">
            <div className="bg-[#FFF9E5] basis-1/2 h-[500px] rounded-xl">
              <img
                className="object-center w-full h-full object-cover"
                src={currentProduct.image}
                alt=""
              />
            </div>

            <div className="basis-1/2">
              <h1 className="text-3xl font-semibold">{currentProduct.title}</h1>
              <p className="text-2xl text-slate-500 mt-3 flex gap-40">
                {currentProduct.price}
                <BsBalloonHeart className="mt-2 text-red-500"/>
                
              </p>

              <div className="divide-x mt-2 divide-slate-800 flex gap-x-4">
                <Rating />
                <p className="pl-4 text-slate-500">5 customer reviews</p>
              </div>

              <p className="font-medium mt-5">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>

              <div className="mt-5 space-y-2">
                <h3 className="font-medium text-slate-500">Size</h3>

                <div className="space-x-4">
                  <button className="py-1.5 px-3 bg-[#FBEBB5] rounded-md">
                    L
                  </button>
                  <button className="py-1.5 px-3 bg-[#FAF4F4] rounded-md">
                    XL
                  </button>
                  <button className="py-1.5 px-3 bg-[#FAF4F4] rounded-md">
                    XS
                  </button>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <h3 className="font-medium text-slate-500">Color</h3>

                <div className="space-x-4">
                  <button className="h-[30px] w-[30px] bg-[#816DFA] rounded-full"></button>
                  <button className="h-[30px] w-[30px] bg-black rounded-full"></button>
                  <button className="h-[30px] w-[30px] bg-[#CDBA7B] rounded-full"></button>
                </div>
              </div>

              <div className="mt-5 flex gap-x-4">
                <div className="flex gap-x-8 py-4 px-3.5 border rounded-md w-max">
                  <button
                    disabled={itemCount === 0}
                    onClick={() => setItemCount(itemCount - 1)}
                  >
                    -
                  </button>
                  <span>{itemCount}</span>
                  <button onClick={() => setItemCount(itemCount + 1)}>+</button>
                </div>

                <button className="py-4 px-12 border border-slate-800 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </main>

    // <div>
    //   <Header />
    //   <BreadCrumbs />
    //   <h1>{currentProduct.title}</h1>
    //   <img src={currentProduct.image} alt="imge"/>
    //   <h1>{currentProduct.price}</h1>

    //   <Footer />
    // </div>
  );
}
