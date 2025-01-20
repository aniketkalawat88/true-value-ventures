/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Whatsapp() {
  return (
    <div>
       <Link href="https://api.whatsapp.com/send?phone=+9876543210&text=Hey!%20Can%20I%20Get%20More%20Info%20On%20This?" target='_blank' className="fixed text-4xl right-[3vw] bottom-[3vw] z-30 max-sm:p-4">
            <div className="grid justify-items-center gap-2">
                <div className="contact_icon ">
                    <img src="/WhatsApp.svg" alt="" className=" my-float h-12 w-12" />
                </div>
                {/* <p className="text-[#707070] text-sm pl-1">Talk to us?</p> */}
            </div>
        </Link>
      <Link
        href="tel:9876543210"
        target="_blank"
        className="fixed text-4xl left-[3vw] bottom-[3.5vw] z-30 max-sm:p-4 md:scale-110"
      >
        <div className="mypage-alo-phone">
          <div className="animated infinite pulse mypage-alo-ph-circle-fill"></div>
          <div className="animated infinite tada mypage-alo-ph-img-circle"></div>
        </div>
      </Link>
    </div>
  );
}
