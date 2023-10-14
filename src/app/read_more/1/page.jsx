import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="container my-12">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:pt-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 lg:mb-12">
            <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Pantai Abang</h2>
            <p className="mb-5 font-base text-gray-500 sm:text-xl">
              The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea transportation,
              snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea surface.
            </p>
            <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
          </div>
        </div>
      </div>

      <FooterLanding />
    </>
  );
}
