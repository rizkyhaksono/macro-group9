import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="my-12">
        <div className="max-w-screen-xl mx-auto pt-24 lg:px-6 mb-8 lg:mb-12">
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Batam City Environmental Service Implements National Waste Day</h2>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "National Waste Awareness Day (HPSN) is celebrated every February 21. The Ministry of Environment declared February 21 2006 as National Waste Awareness Day for the first time. This warning appears above ideas and pressure from a number of parties to commemorate the events in Leuwigajah, Cimahi, West Java, on February 21 2005 where rubbish could become a killing machine that claimed the lives of more than 100 people."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "In this unfortunate incident, it occurred due to heavy rainfall and an explosion of methane gas in a pile of rubbish. As a result, 157 people lost their lives and two villages (Cilimus and Pojok) disappeared from the map due to landslides of rubbish, which comes from the Leuwigajah Final Disposal Site (TPA). This tragedy triggered the proclamation of National Waste Awareness Day (HPSN), which was commemorated on the exact date the incident occurred."
            }
          </p>
          <Image src="/blogs/blog2.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "Garbage is indeed a big problem in various cities in Indonesia, especially in developed cities such as Batam City. One of the causes of this incident is the low level of public awareness of the impacts caused from trash. Currently, the Waste Management sector and the Environmental Protection sector of Batam City DLH are working optimally to handle this problem. This problem cannot be underestimated because it is one thing The requirements for becoming a developed city are determined by how the city manages waste well. Based on this, the Batam City Environmental Service through National Waste Awareness Day invites the entire community Batam City maintains the cleanliness of the surrounding environment by disposing of rubbish in its proper place."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">The 2019 HPSN was commemorated through a series of activities including: :</p>
          <p className="my-2 font-base text-gray-500 sm:text-xl">
            1. On February 21 2019, the Beach Cleaning Mutual Cooperation Activity in Bengkong Laut, Bengkong District with the Riau Islands Regional Police was attended by the Batam City Government, Police, TNI, Vertical Agencies, Students
            and the Community.
          </p>
          <p className="my-2 font-base text-gray-500 sm:text-xl">2. On February 21 2019, the Beach Cleaning Mutual Cooperation Activity at Nongsa Beach with POLAIRUD was attended by the Batam City Government, Students and the Community.</p>
          <p className="my-2 font-base text-gray-500 sm:text-xl">
            {
              "3. February 11 2019, Waste Utilization Workshop in the Auditorium Hall of Batam International University. This workshop includes training in making compost (composting), ecobricks, and displays of utilization creations other rubbish. This workshop was attended by representatives of industry, schools and the community."
            }
          </p>
          <p className="my-2 font-base text-gray-500 sm:text-xl">
            {"4. From 10 February 2019 to 10 March 2019, Activities for Writing and Poetry Reading Competitions and Creativity Competitions for Using Inorganic Waste for Middle School & High School Students in Batam City."}
          </p>
          <p className="my-2 font-base text-gray-500 sm:text-xl">
            {
              "5. On March 17 2019, the Beach Cleaning Mutual Cooperation Activity at Tanjung Seberang Harbor Bay (Tanjung Uma), which was the culmination of a series of activities for the 2019 National Waste Awareness Day (HPSN) which was participated in by all Batam City Regional Apparatus Organizations (OPD), Vertical Agencies, Students and the Community."
            }
          </p>
          <p className="my-2 font-base text-gray-500 sm:text-xl">
            {
              "The highlight of the HPSN event was celebrated on Sunday 17 March 2019. The Batam City Environmental Service carried out mutual cooperation actions to commemorate National Waste Awareness Day (HPSN) which was held at 5 locations located considered polluted by rubbish, namely around Tanjung across Harbor Bay, Tanjung Utama Subdistrict, Lubuk Baja District, Batam, which was attended by government agencies, scout students, TNI, POLRI, BP Batam, the community around and several companies which starts at 09.00 WIB until 12.00 WIB and is scheduled to be opened by the Mayor of Batam. However, because there was a sudden agenda for another event, the Mayor of Batam H Muhammad Rudi,S.E. MM was represented by the Regional Secretary of Batam City, Mr. Drs. Jefridin, MPd, and Head of the Batam City Environmental Service, Dr. Herman Rozie."
            }
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
