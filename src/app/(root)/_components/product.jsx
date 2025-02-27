"use client";

import React, { useState } from "react";
import { MotionDiv } from "../utils/motion-div";

const products = {
  "Rapeseed (Canola) Meal": {
    data1: "",
    description:
      "Rapeseed meal or canola meal, a byproduct obtained after the extraction of oil from the rapeseed plant, is widely used as animal feed due to its high protein and nutritional value. Its demand is anticipated to grow significantly amid the growing need for high-protein animal feed ingredients. Rapeseed meal is becoming an ideal replacement for other protein sources like soybean meal. This is due to its high protein content. Amid the growing world population and rising per capita meat consumption, there is an increasing need for protein-rich meals/feeds. This will likely fuel demand 					  for rapeseed meal as it promotes livestock production. Rapeseed meal is a desirable option for feed manufacturers due to its cost-effectiveness and nutritional benefits. ",
    image: "https://yashikaagro.com/wp-content/uploads/2023/07/rapeseed-meal.jpg",
  },
  "Non-GMO Soybean Meal": {
    description: ` Non-GMO soybean meal is a high-quality product obtained through a multistage extraction process, ensuring an excellent source of protein while being completely free from cholesterol. Rich in essential amino acids, it effectively meets the biological requirements for metabolism, making it a valuable and economical protein and mineral source. This soybean meal is widely recognized for its functional and nutritional benefits, offering a high content of digestible protein along with essential fiber and minerals.`,
    data1:
      "Protein content: 46%-48%   Maximum fat content: 1.5%  Moisture content: Not exceeding 11%  Maximum sand/silica content: 2%  Packed in 50 kg food-grade laminated PP bags or customized packaging  Storage: Clean, dry, and infestation-free conditions on pallets  Freshness and nutritional value maintained for up to 12 months",
    image:
      "https://www.deesan.com/wp-content/uploads/2022/11/ISBM.jpg",
  },
  "Rapeseed (Canola) Oil": {
    data1: "",
    description:
      "Rapeseed oil stands out as a healthy option among vegetable oils due to its unique nutritional profile. It's indeed lower in saturated fat, making it heart-friendly, and its high mono-unsaturated fat content further supports cardiovascular health. The presence of alpha-linolenic acid (ALA), a type of omega-3 fatty acid, is particularly beneficial, as omega-3s are known to reduce inflammation and support brain and heart health. Its richness in vitamin E adds an antioxidant boost, protecting cells from oxidative damage, while vitamin K contributes to strong bones and proper blood clotting. Overall, rapeseed oil offers a balanced combination of essential nutrients, making it a versatile and health-conscious option for cooking. ",
    image:
      "https://www.laurawyness.com/wp-content/uploads/2024/06/rapeseed-oil.png",
  },
  "Dehydrated Garlic Flakes": {
    description:
      "Dried garlic slices are white to pale yellow in color, cut into standard-sized slices of 8-15 mm. They have a moisture content of ≤6% and an impressive purity of ≥99.5%, ensuring high quality. With their strong, pungent, and natural garlic aroma, these slices are dry and crispy in texture, making them perfect for a wide range of culinary uses. In the food industry, dried garlic slices are commonly used in soups, sauces, pickles, and seasonings.",
    data1: 
      "Ideal for spice blends, dry rubs, and pre-mixed food preparations.  When rehydrated, they work excellently in cooking and food processing applications.  For packaging, the slices are carefully stored in food-grade polyethylene bags placed inside corrugated cartons or jute bags.  Standard packaging sizes range from 10 kg to 20-25 kg, with the option of vacuum-sealed bags for extended shelf life.  To maintain their quality, dried garlic slices should be stored in a cool, dry place away from direct sunlight and moisture.  When stored properly, they have a shelf life of 12 to 24 months.",
    image:
      "https://www.dial4trade.com/uploaded_files/product_images/dehydrated-onion-org-25158203462191825.jpg",
  },
  "Dehydrated Onion Granules": {
    description:
      "Dehydrated onion granules are fine, coarse particles made by grinding dehydrated onions. They are smaller than flakes but coarser than onion powder.",
    data1:
      "Appearance: Creamy white to light yellow incolor, free from black spots, discoloration, or foreignmaterials.  Size: Standard granule size ranges from 0.2 mmto 1 mm (or as per buyer requirements).  Moisture Content: Below 5%–6% to ensureextended shelf life and prevent clumping.  Purity: 99.5% (free from impurities, additives,and preservatives).  Flavor and Aroma: Strong, pungent onion flavor with no off-odors or stale smell.",
    image:
      "https://4.imimg.com/data4/DG/DQ/MY-23060451/dehydratd-white-onion-granules-500x500.jpg",
  },
  
  "Dehydrated Onion Flakes": {
    description:
      "Dehydrated onion flakes are small, flat pieces of dried onion, typically produced from mature white or red onions. These flakes are widely used in the food industry for their strong aroma and long shelf life.",
    data1:
      "White Onion Flakes: Popular for their mild, sweet flavor.  Red Onion Flakes: Stronger and sharper flavor, with a reddish hue.  Size: Typically 8-25 mm (standard export size). Custom sizes can be produced upon request.  Moisture Content: Below 6% to ensure a longer shelf life.  Purity: 99.5% (minimal foreign matter, no additives). Appearance: Creamy white or light reddish in color, free from black spots, discoloration, or contaminatio",
    image:
      "https://5.imimg.com/data5/UK/VJ/MY-13854737/dehydrated-red-onion-flakes-500x500.jpg",
  },
  "Dehydrated Onion Powder": {
    description:
      "Finely ground powder made from dehydrated onions, offering a concentrated onion flavor.",
    data1:
      "Appearance: Light creamy white to pale yellow in color, smooth texture, and free from lumps or foreign matter.  Flavor: Strong, pungent onion taste, free from off- odors.  Moisture Content: Below 5% to ensure extended shelf life.  Culinary Use: Used in soups, sauces, marinades, dips, and dry rubs.  Food Industry: Essential in spice blends, snack seasonings, ready-to-eat meals, and fast food chains.  Commercial Use: Popular in processed foods like chips, instant noodles, and frozen meals.",
    image:
      "https://img2.exportersindia.com/product_images/bc-small/2021/5/8846794/dehydrated-onion-powder-1621405496-5827253.jpeg",
  },
  "Dehydrated Garlic Flakes": {
    data1:
      "They are also ideal for spice blends, dry rubs, and pre-mixed food preparations. When rehydrated, they work excellently in cooking and food processing applications. For packaging, the slices are carefully stored in food-grade polyethylene bags placed inside corrugated cartons or jute bags. Standard packaging sizes range from 10 kg to 20-25 kg, with the option of vacuum-sealed bags for extended shelf life. To maintain their quality, dried garlic slices should be stored in a cool, dry place away from direct sunlight and moisture. When stored properly, they have a shelf life of 12 to 24 months.",
    description:
      "Dried garlic slices are white to pale yellow in color, cut into standard-sized slices of 8-15 mm. They have a moisture content of ≤6% and an impressive purity of ≥99.5%, ensuring high quality. With their strong, pungent, and natural garlic aroma, these slices are dry and crispy in texture, making them perfect for a wide range of culinary uses. In the food industry, dried garlic slices are commonly used in soups, sauces, pickles, and seasonings.  ",
    image:
      "https://5.imimg.com/data5/JR/PW/MY-68418379/dehydrated-garlic-flakes-500x500.jpeg",
  },
  "Dehydrated Garlic Granules": {
    description: `Dehydrated garlic granules are a premium export product known for their quality and versatility in the global food industry. These granules are typically white to off-white in color, with a strong, pungent garlic aroma and a natural flavor that enhances a variety of dishes. Standard granule sizes include 8-20 mesh, 20-40 mesh, and 40-80 mesh, catering to diverse culinary and industrial requirements. With a moisture content of ≤6% and a purity level of ≥99.5%, these granules meet international quality standards.`,
    data1:
      "Widely used in the preparation of seasonings, spice blends, soups, sauces, pickles, and pre-mixed food products, dehydrated garlic granules are also valued for their ease of use in rehydrated forms during cooking and food processing. They are packaged for export in food-grade polyethylene-lined bags, typically stored within corrugated cartons or jute bags. Standard packaging sizes include 10 kg, 15 kg, and 20-25 kg packs, with vacuum-sealed options available to ensure extended freshness and shelf life during transit.",
    image: "https://aactuala.in/images/products/DehydratedGarlicGranules/1.png",
  },
  "Dehydrated Garlic Powder": {
    description:
      "Dehydrated garlic powder is a highly sought-after export product, renowned for its fine texture, strong aroma, and rich garlic flavor. This versatile ingredient is typically white to off-white in color, with a mesh size ranging from 80 to 100, ensuring a smooth, uniform consistency suitable for a wide array of applications. With a moisture content of ≤6% and a purity level of ≥99.5%, dehydrated garlic powder meets stringent international quality standards, making it ideal for global markets. It is widely used in the food and beverage industry for seasonings, spice blends, soups, sauces, marinades, and snack flavorings.  ",
    data1:
      "Additionally, its ease of use and solubility make it a key ingredient in instant food mixes and processed food products. Dehydrated garlic powder is also favored in rehydrated forms for cooking and food preparation. For export, it is carefully packaged in food-grade polyethylene-lined bags, further secured within corrugated cartons or jute bags to maintain quality during transit. Standard packaging sizes include 10 kg, 15 kg, and 20-25 kg packs, with the option of vacuum-sealed bags for extended freshness and shelf life.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BbpXAf366On0Zy6kQ-nV7wTqxGgKugmW2g&s",
  },
  "Biomass Pellets & Briquettes": {
    description:
      "Biomass pellets and briquettes are eco-friendly, renewable energy sources made from compressed organic materials such as agricultural residues, wood waste, sawdust, and other biomass byproducts. They are an efficient and sustainable alternative to fossil fuels, offering cleaner combustion and lower carbon emissions.",
    data1:
      " Pellets :- Cylindrical in shape, typically 6-16 mm in diameter and 10-30 mm in length, biomass pellets are compact, dense, and designed for use in pellet stoves, boilers, and industrial furnaces. Their small size and uniform shape make them easy to handle, transport, and store. Now a day they are widely used for electricity generation as fuel for thermal power stations.  Briquettes :- Larger and cylindrical or rectangular in shape, briquettes are generally 60-90 mm in diameter and 150-300 mm in length. They are denser than pellets and used in larger-scale applications, such as industrial heating, power generation, and as fuel in boilers or kilns.  Biomass pellets and briquettes are valued for their high calorific value, low ash content, and cost-effectiveness. They promote waste-to-energy conversion and reduce dependency on fossil fuels, contributing to sustainable energy solutions.",
    image:
      "/03.png",
  },
  "Indian Organic Millets": {
    data1:
      "Our organic millets are classified into two categories:  Major Millets: o Sorghum (Jowar) – Gluten-free, antioxidant-rich, and excellent for digestion. o Pearl Millet (Bajra) – High in iron, beneficial for heart health, and diabetes-friendly. o Finger Millet (Ragi) – A powerhouse of calcium, protein, and amino acids.  Minor Millets: o Foxtail Millet (Kangni) – Supports weight management and heart health. o Barnyard Millet (Sanwa) – Low in calories, perfect for diabetics. o Kodo Millet (Kodra) – High in fiber, aids in obesity prevention. o Little Millet (Kutki) – Boosts digestion and provides essential micronutrients. o Proso Millet (Chena) – Protein-rich, enhances bone and muscle strength. o Browntop Millet (Korale) – Detoxifies the body and improves gut health.",
    description:
      "At TRUE VALUE VENTURES, we bring you the finest Indian organic millets, cultivated using traditional and sustainable farming practices. Rich in fiber, protein, and essential minerals, our premium-quality millets serve as a nutritious, gluten-free alternative to refined grains, catering to health-conscious consumers worldwide.",
    image:
      "https://pmfias.b-cdn.net/wp-content/uploads/2023/01/Millets-Alternative-Crops.png",
  },
  "Indian Handicrafts": {
    description: ` At TRUE VALUE VENTURES, we bring you the finest Indian handicrafts, crafted by skilled artisans who preserve centuries-old traditions. Each piece reflects India's rich cultural heritage, blending artistry with functionality, making it a perfect addition to global markets. .`,
    data1:
      "1. Wooden Handicrafts :Wooden sculptures, Paintings , Murals , Lipan Art ,Decorative boxes, Jewelry organizers, and engraved wall panels. 2. Metal Handicrafts : Brass idols, Metal wall art, Lamps, Utensils, andintricate filigree jewelry. 3. Textile &amp; Embroidery Handicrafts: Pashmina shawls, Banarasi Maheshwari ,Chanderi silk Sarees, Embroidered cushion covers, and handmade rugs.4. Pottery &amp; Ceramic Handicrafts: Blue Pottery from Jaipur, Terracottafigurines, and glazed Ceramics, Decorative vases, Tableware, and wallmurals.5. Marble &amp; Stone Handicrafts : Exquisite marble inlay work, Taj Mahal replicas,Stone sculptures, Tabletops, and Decorative coasters.6. Leather Handicrafts : leather goods from Rajasthan, Juttis (traditionalfootwear), leather journals, handbags, and wallets 7. Bamboo &amp; Cane Handicrafts : Bamboo baskets, furniture, lampshades,and wall décory.8. Jewelry &amp; Accessories : Semi-precious stones, Beads, Meenakari, Kundanwork , Earrings, Necklaces, Bangles, and oxidized silver jewelry.",
    image:
      "https://www.sudesh-artncrafts.com/wp-content/uploads/2020/02/Indias-Best-Wholesalers-for-Export-of-a-Rich-Collection-of-Home-D%C3%A9cor-Handicrafts-Products.png",
  },
};

const ProductSelector = () => {
  const [selectedProduct, setSelectedProduct] = useState(
    "Rapeseed (Canola) Meal"
  );

  const variants = {
    start: { x: -200, opacity: 0 },
    end: { x: 0, opacity: 1 },
    startUp: { y: 200, opacity: 0 },
    endUp: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-secondary-main/10 p-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
        {/* <h1 className="text-3xl font-bold mb-6 text-primary-main">Our Product</h1> */}
        <select
          onChange={(e) => setSelectedProduct(e.target.value)}
          value={selectedProduct}
          className="w-full max-w-md border p-3 rounded bg-primary-main/20 md:px-4  "
        >
          {Object.keys(products).map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>

        <MotionDiv
          key={selectedProduct}
          variants={variants}
          initial={variants.start}
          animate={variants.end}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false }}
          className=" w-full max-w-7xl grid md:grid-cols-2 items-center rounded-lg overflow-hidden md:p-6 my-4 md:text-center text-justify"
        >
          <div>
            <h2 className="md:text-3xl text-2xl font-semibold mb-4 text-gray-900 text-justify">
              {selectedProduct}
            </h2>
            <p className="text-gray-700 mb-6 md:text-lg text-base text-justify">
              {products[selectedProduct].description}
            </p>

            {/* Check if data1 exists and is not empty */}
            {products[selectedProduct].data1 && (
              <ul className="list-disc pl-5 text-gray-700 mb-6 md:text-lg text-base text-start">
                {products[selectedProduct].data1
                  .split("")
                  .map((point, index) =>
                    point.trim() ? <li key={index}>{point.trim()}</li> : null
                  )}
              </ul>
            )}
          </div>

          <div className="w-full flex justify-center h-full md:mt-20">
            <img
              src={products[selectedProduct].image}
              alt={selectedProduct}
              className="rounded-lg shadow-lg md:h-[80%] md:w-[80%] h-72"
            />
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default ProductSelector;
