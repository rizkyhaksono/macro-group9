"use client";

import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="my-12 mx-8">
        <div className="max-w-screen-xl mx-auto pt-24 lg:px-6 mb-8 lg:mb-12">
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">MIN 2 Batam Holds Waste Bank Program</h2>
          <p className="my-1 font-base text-gray-500">{"Batam - The Waste Bank Program is an effort to utilize discarded rubbish so that it can be sold and make money and also keep the environment clean."}</p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {"To make this happen, the Head of MIN 2 Batam, Imas Sa'adah, held a Waste Bank program at MIN 2 Batam. The trash that has been thrown away is selected and separated into plastic and paper and then collected."}
          </p>
          <Image src="/blogs/blog5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "On Tuesday 22 February 2022 there will be a sale of rubbish at MIN 2 Batam, apart from the rubbish that is usually thrown into the rubbish bin, as well as books and papers that are no longer used, transport trucks garbage comes to the madrasah to weigh and transport the rubbish."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "Waste is always a problem wherever it is. With this waste bank program, it is hoped that awareness of throwing waste in its place can be made a habit of by students and that this waste can produce funds to be used in madrasas. (PR_MIN2)."
            }
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
