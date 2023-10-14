"use client";

import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

import { Card } from "flowbite-react";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="max-w-screen-xl px-4 mx-auto lg:pt-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Blogs</h2>
            <p className="mb-5 font-base text-gray-500 sm:text-xl">Here at GreenSaver a collection of the latest news from us.</p>
          </div>
        </div>

        <div tabIndex="0" aria-label="Group of cards" className="focus:outline-none py-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
              <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Pantai Abang
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea
                  transportation, snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea
                  surface.
                </p>
                <div className="w-full flex justify-end">
                  <a href="/read_more/1" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                  </a>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
              <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Pantai Abang
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea
                  transportation, snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea
                  surface.
                </p>
                <div className="w-full flex justify-end">
                  <a href="/read_more/2" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                  </a>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
              <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Pantai Abang
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea
                  transportation, snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea
                  surface.
                </p>
                <div className="w-full flex justify-end">
                  <a href="/read_more/3" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                  </a>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
              <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Pantai Abang
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea
                  transportation, snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea
                  surface.
                </p>
                <div className="w-full flex justify-end">
                  <a href="/read_more/4" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                  </a>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
              <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Pantai Abang
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea
                  transportation, snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea
                  surface.
                </p>
                <div className="w-full flex justify-end">
                  <a href="/read_more/5" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                  </a>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
              <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Pantai Abang
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea
                  transportation, snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea
                  surface.
                </p>
                <div className="w-full flex justify-end">
                  <a href="/read_more/6" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                  </a>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto mb-8 text-center pt-12 lg:mb-12" id="community">
        <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Communities</h2>
        <p className="mb-5 font-base text-gray-500 sm:text-xl">Here are some of Indonesia famous trash communities</p>
      </div>
      <div className="container mx-auto grid xl:grid-cols-3 gap-8 pb-20">
        <Card imgAlt="Asosiasi Daur Ulang Plastik Indonesia" imgSrc="/images/picture1.jpg" className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asosiasi Daur Ulang Plastik Indonesia</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Founded in 2015, the Indonesian Plastic Recycling Association (ADUPI) is a non-profit organization that aims to encourage Indonesian people to care more about plastic waste. This institution was founded as a forum for
            practitioners and the plastic recycling industry in Indonesia. Members can gather with each other, build networks, and share knowledge.
          </p>
        </Card>
        <Card imgAlt="EwasteRJ" imgSrc="/images/picture2.jpg" className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EwasteRJ</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            EwasteRJ is a community that operates in the field of recycling electronic waste or e-waste. Since 2015, EwasteRJ has been active in educating the Indonesian public about the dangers of electronic waste. In the campaign carried
            out, EwasteRJ also provides knowledge to the public regarding how to dispose of electronic waste properly.
          </p>
        </Card>
        <Card imgAlt="Indonesian Plastics Recycle" imgSrc="/images/picture3.jpg" className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indonesian Plastics Recycle</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Indonesian Plastic Recycle (IPR) fokus mewadahi para pelaku usaha di bidang daur ulang plastik. Asosiasi ini bertujuan menciptakan ekosistem daur ulang plastik yang harmonis, agar dapat membangun ekonomi melingkar (circular
            economy) yang berkelanjutan di kalangan pelaku usaha daur ulang plastik tersebut. Selain itu, IPR juga ingin berkontribusi terhadap kelestarian lingkungan hidup.
          </p>
        </Card>
      </div>

      <FooterLanding />
    </>
  );
}
