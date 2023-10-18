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
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Inaugurating Waste Recycling Facility in Batam, Coordinating Minister Luhut: Collaboration is Needed to Protect the Environment</h2>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "Batam, the Government continues to encourage the commitment of parties to recycle plastic waste into more useful products. In support of this commitment, the Coordinating Minister for Maritime Affairs and Investment, Luhut B. Pandjaitan inaugurated PT Free the Sea (PT. WIK Group), a company that recycles plastic waste to be used as raw material for upcycling coffee maker production. By collaborating with 20 collectors and 700 individual collectors, PT. Free the Sea with PT. WIK has recycled twenty million plastic bottle waste and produced one million coffee maker units. PT. Free the Sea also provides guidance to several schools in Batam to increase understanding about the importance of sorting waste from the source."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "This effort is an extraordinary commitment where household equipment manufacturing companies use raw materials from plastic waste into high-value materials. If not managed, plastic waste has the potential to become dangerous pollute the environment and become microplastics. This will be a big problem for all of us. The recycling plant that was built and the integration of the use of recycled resin in one industrial process are concrete examples 'from implementing zero waste, circular economy and green industry,' concluded Coordinating Minister Luhut."
            }
          </p>
          <Image src="/blogs/blog3.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "Coordinating Minister Luhut also added that plastic waste has become a transboundary issue and is one of the concerns of the UN Agency in dealing with environmental issues, which is currently under discussion on an international agreement in managing the reduction of plastic waste."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">Coordinating Minister Luhut said collaboration was a very important factor in solving this waste problem.</p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "Collaboration is a very important factor, the circular economy scheme is a scheme that can be implemented by producers not only for the continuity of the business they run but also the surrounding environment so that it is profitable all parties, explained Coordinating Minister Luhut. Furthermore, Coordinating Minister Luhut emphasized that every party is responsible for solving the plastic waste problem. “Every effort to handle plastic waste must be carried out collaboratively upstream to downstream. Let's not minimize the role of individual collectors. It is possible that their efforts have saved mothers and fathers from potential exposure to microplastics, due to consuming food that has been exposed microplastics"
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "At his closing, Coordinating Minister Luhut reminded that this waste problem does not only emphasize collaboration but also awareness of the responsibilities of all parties. “Remember carefully, apart from collaboration, we also have to collaborate have an awareness of environmental responsibility, don't damage your environment, because our children and grandchildren will live from the environment that we protect now,concluded Coordinating Minister Luhut."
            }
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
