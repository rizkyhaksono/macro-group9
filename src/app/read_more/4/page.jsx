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
          <p className="my-1 font-base text-gray-500">{"Batam, 17 April 2023 "}</p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "Batam City Environmental Service (DLH) official, Mr. Ip, ST., MT. as Head of Environmental Protection and his team visited the Batam Institute of Technology (ITEBA) on Monday 17 April 2023. This visit was welcomed by the Deputy Chancellor 1 of ITEBA, Mr. Dr. Eng. Ansarullah Lawi, Dean of the ITEBA Faculty of Information Technology, Mrs. Dr. Ir. Ririt Dwiputri Permatasari, S.T., M.SI., Head of ITEBA Cooperation Section, Mr. Zainul Munir, S.T., Me.TC., and the Secretariat of the ITEBA Rector, Mrs. Novita Pratiwi, S.Psi."
            }
          </p>
          <Image src="/blogs/blog4.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "During this visit, a meeting or discussion was held to explore waste management cooperation between ITEBA and DLH Batam City. ITEBA Deputy Chancellor 1 revealed that ITEBA plans to design a waste collection ship using Internet of Things (IoT) and Machine Learning (ML) technology. This project will involve three parties to work together and collaborate with DU/DI, and the results will be evaluated by DLH as a representative of public. Apart from that, ITEBA students will also be invited to Behind Padang for a case study and to see the cultivation of Maggots (animals that can decompose waste)."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "ITEBA is submitting a Matching Fund proposal to the Ministry of Education and Culture, Research and Technology via the Kedaireka application for a collaboration program with DU/DI and DLH Batam City by designing a marine waste management system using technology IoT and ML. In the roadmap for this program, plans are presented from 2023 to 2027. In 2023 the focus will be on marine waste management using semi-automatic marine nets with IoT and ML technology."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "The Head of Environmental Protection, Mr. Ip, also provided information that waste in Batam currently amounts to 850 tonnes/day, with stockpiles amounting to 1,132 tonnes. As much as 11.65% or around 132 tons cannot be handled, and 6-7% of waste in Batam or almost 89 tons is thrown into the sea. DLH handles 9 of the 12 sub-districts in Batam."
            }
          </p>
          <Image src="/blogs/blog4_2.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "Currently, there is a project from one organization, namely Seven Clean Seas, which helps several areas in Batam, including Tanjung Uma and Setokok, to use tools and manually clean up rubbish by local residents. In Jabstrada, by 2025 the country is targeting a 30% reduction in waste. 50-60% of the waste produced is inorganic, while only 40-45% is organic. Burning rubbish is a criminal offence."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "The Head of the Environmental Protection Division also appreciates the initiative from ITEBA and hopes that the collaboration between the Environmental Service and ITEBA can provide an effective solution for waste management in the city of Batam. He also emphasized the importance of education and outreach to the public so as not to throw rubbish into the sea, and expressed the hope that ITEBA could contribute to this by providing education to community and produce works/handicrafts from waste."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "The discussions also covered the country's target by 2025 to reduce the amount of residue taken to Final Processing Sites (TPA), as well as ITEBA's plans to reschedule meetings with DLH and third parties (industry). to discuss waste management collaboration and prepare a location description, detailed proposal/master plan, and required costs."
            }
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
