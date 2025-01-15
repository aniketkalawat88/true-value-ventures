import React from 'react'

export default function ContactUs() {
  return (
    
  <section className="relative my-10 bg-primary-main text-white">
  <img
    alt="Tanker truck"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
    src="https://plus.unsplash.com/premium_photo-1661962773421-6b97ceec1f0e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1wb3J0JTIwZXhwb3J0fGVufDB8fDB8fHww"
  />
  <div className="max-w-7xl mx-auto py-10 relative z-10">
    <div className="text-center">
      <h2 className="text-3xl font-bold uppercase">Enquiry Now</h2>
      <p className="mt-4">We always use best &amp; fastest fleets</p>
    </div>
    <form className="mt-8 max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="py-2 px-4 rounded-lg border border-gray-300"
          placeholder="Full Name"
          type="text"
        />
        <input
          className="py-2 px-4 rounded-lg border border-gray-300"
          placeholder="Email"
          type="email"
        />
        <input
          className="py-2 px-4 rounded-lg border border-gray-300"
          placeholder="Mobile"
          type="text"
        />
        <input
          className="py-2 px-4 rounded-lg border border-gray-300"
          placeholder="Destination From"
          type="text"
        />
        <input
          className="py-2 px-4 rounded-lg border border-gray-300"
          placeholder="Destination To"
          type="text"
        />
        <select className="py-2 px-4 rounded-lg border  border-gray-300 text-gray-400">
          <option className=''>Shipping Type</option>
          <option className='text-black'>Type 1</option>
          <option className='text-black'>Type 2</option>
        </select>
      </div>
      <textarea
        className="mt-4 py-2 px-4 rounded-lg border border-gray-300 w-full resize-none h-44"
        placeholder="Message"
        defaultValue={""}
      />
      <button className="mt-4 py-2 px-6 bg-primary-main hover:bg-primary-main rounded-full text-white">
        Submit
      </button>
    </form>
  </div>
</section>

// {/* <div className="relative">
// <video className="custom-video max-md:h-[300px]" loop playsInline muted autoPlay>
//   <source src="/video1.mp4" type="video/mp4" />
//   <track
//     src="/video1.mp4"
//     kind="subtitles"
//     srcLang="en"
//     label="English"
//   />
//   Your browser does not support the video tag.
// </video>

//     <div className="h-full w-full bg-primary-main/30 absolute top-0" />
//   <div className="flex items-center justify-center h-full absolute w-full top-0 px-4">
//     <div className="text-center text-white max-w-3xl mx-auto ">
//     <p
//               className={`text-xs sm:text-base tracking-widest max-md:mt-10 md:mb-4 max-md:mb-2`}
//             >
//               Pachmarhi ke Maze, Bas Tumhare Liye
//             </p>
//             <h1 className="xl:text-[3rem] lg:text-5xl max-md:text-xl sm:text-2xl text-base font-bold text-primary-main uppercase">
//             Discover the Magic of
//             </h1>
//             <h2
//               className={`xl:text-[5rem] lg:text-5xl max-md:text-4xl sm:text-2xl text-base font-bold md:mb-4  uppercase `}
//             >
//               {`Pachmarhi`}
//             </h2>
//       <p className="md:text-sm sm:text-sm mb-6 max-w-2xl mx-auto max-md:mt-4 max-md:hidden">
//        {`    Suhana Tours and Travels offers personalized tours in Pachmarhi, showcasing its stunning nature, rich culture, and hidden gems for unforgettable adventures.`}
//       </p>
//         <button className="bg-primary-main text-white py-2 sm:py-3 px-4 sm:px-6 rounded-sm text-sm hover:bg-primary-main transition duration-300 font-medium"
//       >
//         Explore Now
//       </button>
//     </div>
//   </div>
// </div>  */}


  )
}
