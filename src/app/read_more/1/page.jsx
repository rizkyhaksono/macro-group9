"use client";

import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="my-12">
        <div className="max-w-screen-xl mx-auto pt-24 lg:px-6 mb-8 lg:mb-12">
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">
            The Batam City Environmental Service together with the Batam City PKK Mobilization Team carried out socialization on sorting waste from home in Tembesi Village, Sagulung District.
          </h2>
          <p>{"Jum'at, 8 September 2023"}</p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "The Batam City Environmental Service together with the Batam City PKK Mobilization Team carried out socialization on sorting waste from home in Tembesi Village, Sagulung District. The event was attended directly by the Head of the Batam City PKK Mobilization Team, Hj. Marlin Agustina who is also Deputy Governor of Riau Islands Province. In his speech he invited mothers to take part in helping to create a clean Batam City by sorting rubbish from their homes and from sorting the rubbish, rubbish those with economic value can be sold to the Waste Bank. On that occasion, the Chair of the Batam City PKK Mobilization Team also inaugurated the Waste Bank from PT's CSR Program. Transgasindo at Permata Rhabayu Housing RW.18."
            }
          </p>
          <Image src="/blogs/blog1.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-1">Email : dlh@batam.go.id</p>
          <p className="my-1">Instagram : dlhkotabatam</p>
          <p className="my-1">Facebook Fanpage : DLH Kota Batam</p>
          <p className="my-1">#dlhkotabatam #lingkunganhidup #programkalibersih #hut78tnial #batamkotabaru</p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
