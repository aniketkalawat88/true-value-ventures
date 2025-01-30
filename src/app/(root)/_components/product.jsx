"use client"

import React, { useState } from "react";
import Image from "next/image";

const products = {
  "Rapeseed (Canola) Meal": {
    description:
      "Rapeseed meal or canola meal, a byproduct obtained after the extraction of oil from the rapeseed plant, is widely used as animal feed due to its high protein and nutritional value. Its demand is anticipated to grow significantly amid the growing need for high-protein animal feed ingredients. Rapeseed meal is becoming an ideal replacement for other protein sources like soybean meal due to its high protein content. Increasing livestock production, rising per capita meat consumption, and its cost-effectiveness further fuel its demand.",
    image: "https://gradoil.com.ua/wp-content/uploads/2015/10/shrot_raps.jpg",
  },
  "Rapeseed (Canola) Oil": {
    description:
      "Rapeseed oil stands out as a healthy option among vegetable oils due to its unique nutritional profile. It is lower in saturated fat, high in mono-unsaturated fats, and rich in omega-3 fatty acids, vitamin E, and vitamin K, making it heart-friendly and beneficial for overall health. It has a high smoke point, making it ideal for frying, roasting, and sautéing. Beyond cooking, refined rapeseed oil is used in biodiesel, cosmetics, and as a lubricant.",
    image: "https://www.laurawyness.com/wp-content/uploads/2024/06/rapeseed-oil.png",
  },
  "Dehydrated Onion Flakes": {
    description:
      "Dehydrated onion flakes are small, flat pieces of dried onion, typically produced from mature white or red onions. They have a moisture content below 6% to ensure longer shelf life and are widely used in soups, seasonings, and food preparations.",
    image: "https://img2.exportersindia.com/product_images/bc-full/2024/6/13450774/dried-red-onion-flakes-1717390669-7460263.jpeg",
  },
  "Dehydrated Onion Granules": {
    description:
      "Dehydrated onion granules are fine, coarse particles made by grinding dehydrated onions. They have a strong, pungent flavor and are essential in spice blends, dry rubs, and ready-to-eat meals.",
    image: "https://4.imimg.com/data4/DG/DQ/MY-23060451/dehydratd-white-onion-granules-500x500.jpg",
  },
  "Dehydrated Onion Powder": {
    description:
      "Dehydrated onion powder is a finely ground powder made from dried onions, offering a concentrated onion flavor. It is used in soups, sauces, marinades, dips, and commercial food processing.",
    image: "https://img2.exportersindia.com/product_images/bc-small/2021/5/8846794/dehydrated-onion-powder-1621405496-5827253.jpeg",
  },
  "Dehydrated Garlic Flakes": {
    description:
      "Dehydrated garlic flakes are dried garlic slices with a strong, pungent aroma. They are widely used in soups, sauces, pickles, and spice blends. They have a shelf life of 12 to 24 months if stored properly.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNxokfbu2YC-iaKe16wxg5xK_ElB2J5jbAA&s",
  },
  "Dehydrated Garlic Granules": {
    description:
      "Dehydrated garlic granules are premium quality, widely used in the global food industry for seasoning blends, spice formulations, and processed food applications.",
    image: "https://tiimg.tistatic.com/fp/1/006/165/hygienically-packed-dehydrated-garlic-granules-909.jpg",
  },
  "Dehydrated Garlic Powder": {
    description:
      "Dehydrated garlic powder is a finely ground product with a strong aroma and rich garlic flavor. It is extensively used in seasonings, snack flavorings, instant food mixes, and processed food industries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BbpXAf366On0Zy6kQ-nV7wTqxGgKugmW2g&s",
  },
  "Biomass Pellets & Briquettes": {
    description:
      "Biomass pellets and briquettes are eco-friendly, renewable energy sources made from compressed organic materials such as agricultural residues, wood waste, and sawdust. They provide an efficient alternative to fossil fuels, with cleaner combustion and lower carbon emissions.",
    image: "https://3.imimg.com/data3/TT/ND/MY-4423526/biomass-briquettes-pellets-500x500.jpg",
  },
};

const ProductSelector = () => {
  const [selectedProduct, setSelectedProduct] = useState("Rapeseed (Canola) Meal");

  return (
    <div className="bg-secondary-main/10 my-10 p-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-primary-main">Our Product</h1>
        <select 
            onChange={(e) => setSelectedProduct(e.target.value)} 
            value={selectedProduct} 
            className="w-full max-w-md border p-3 rounded bg-primary-main/20 md:px-4  "
        >
            {Object.keys(products).map((product) => (
            <option key={product} value={product}>{product}</option>
            ))}
        </select>

        <div className=" w-full max-w-7xl grid md:grid-cols-2 items-center rounded-lg overflow-hidden md:p-6 my-4 md:text-center text-justify">
            <div>
            <h2 className="md:text-3xl text-2xl font-semibold mb-4 text-gray-900">{selectedProduct}</h2>
            <p className="text-gray-700 mb-6 md:text-lg text-base">{products[selectedProduct].description}</p>

            </div>
            <div className="w-full flex justify-center">
            <img
                src={products[selectedProduct].image}
                alt={selectedProduct}
                className="rounded-lg shadow-lg h-72"
            />
            </div>
        </div>
        </div>

    </div>
  );
};

export default ProductSelector;