import React from 'react';

export default function HappyClient() {

  return (
    <div className="max-w-7xl mx-auto pb-10 px-4 md:px-6">
  {/* Section Title */}
  <h2 className="md:text-3xl text-2xl font-bold text-primary-main font-montserrat text-center mb-6">
    Our Certifications
  </h2>

  {/* Certifications Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:pt-10">
    {/* IEC Certificate */}
    <div className="flex flex-col items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/International_Electrotechnical_Commission_Logo.svg/1200px-International_Electrotechnical_Commission_Logo.svg.png" 
        alt="IEC Certificate"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
      <p className="mt-2 text-sm sm:text-base font-semibold">IEC (Import Export Code)</p>
    </div>

    {/* GST Certificate */}
    <div className="flex flex-col items-center">
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2023/12/372299423/RN/QN/IT/205608847/gst-application-certification-500x500.jpeg"
        alt="GST Certificate"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
      <p className="mt-2 text-sm sm:text-base font-semibold">GST (Goods & Services Tax)</p>
    </div>

    {/* MSME Certificate */}
    <div className="flex flex-col items-center">
      <img
        src="https://popcorninfotech.com/upload/msme-logo-500x500.png"
        alt="MSME Certificate"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
      <p className="mt-2 text-sm sm:text-base font-semibold">MSME (Micro, Small & Medium Enterprises)</p>
    </div>

    {/* FSSAI Certificate */}
    <div className="flex flex-col items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/e/e2/FSSAI_logo.png"
        alt="FSSAI Certificate"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
      <p className="mt-2 text-sm sm:text-base font-semibold">FSSAI (Food Safety & Standards Authority of India)</p>
    </div>
  </div>
</div>

  );
}
