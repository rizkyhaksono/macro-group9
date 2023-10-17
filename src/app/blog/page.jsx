"use client";

import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

import { Card } from "flowbite-react";
import Link from "next/link";

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
              <Image src="/blogs/blog1.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <p className="focus:outline-none text-4xl text-gray-900 dark:text-white font-bold tracking-wider">Dinas Lingkungan Hidup Kota Batam</p>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  Dinas Lingkungan Hidup Kota Batam bersama Tim Penggerak PKK Kota Batam melakukan Sosialisasi Pilah Sampah dari Rumah di Kelurahan Tembesi, Kecamatan Sagulung.
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
              <Image src="/blogs/blog2.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-bold tracking-wider">
                  Hari Sampah Nasional Kota Batam
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  Hari Peduli Sampah Nasional (HPSN) diperingati setiap tanggal 21 Februari. Kementrian Negara Lingkungan Hidup mencanangkan 21 Februari 2006 sebagai Hari Peduli Sampah Nasional untuk pertama kalinya.
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
              <Image src="/blogs/blog3.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-bold tracking-wider">
                  Resmikan Fasilitas Daur Ulang Sampah di Batam
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  Batam, Pemerintah terus mendorong komitmen para pihak untuk daur ulang sampah plastik menjadi produk yang lebih bermanfaat.
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
              <Image src="/blogs/blog4.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-bold tracking-wider">
                  ITEBA Bahas Kerjasama Pengelolaan Sampah
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  Pejabat Dinas Lingkungan Hidup (DLH) Kota Batam, Bapak Ip, ST., MT. selaku Kabid Perlindungan Lingkungan Hidup beserta timnya melakukan kunjungan ke Institut Teknologi Batam (ITEBA) pada hari Senin tanggal 17 April 2023.
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
              <Image src="/blogs/blog5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-bold tracking-wider">
                  Di Batam Kini Ada Perusahaan Green Industry
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  Bekerja sama dengan masyarakat, perusahaan Jerman ini mengumpulkan sampah botol plastik dari rumah-rumah warga dan didaur ulang menjadi Coffee Maker atau mesin pembuat kopi.
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
              <Image src="/blogs/blog6.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-bold tracking-wider">
                  MIN 2 Batam Adakan Program Bank Sampah
                </h1>
                <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  Program Bank Sampah merupakan salah satu upaya memanfaatkan sampah-sampah yang telah dibuang agar bisa dijual dan menghasilkan uang dan juga menjaga kebersihan lingkungan.
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
          <Link href={"https://www.adupi.org/"}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asosiasi Daur Ulang Plastik Indonesia</h5>
            <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
              Founded in 2015, the Indonesian Plastic Recycling Association (ADUPI) is a non-profit organization that aims to encourage Indonesian people to care more about plastic waste. This institution was founded as a forum for
              practitioners and the plastic recycling industry in Indonesia. Members can gather with each other, build networks, and share knowledge.
            </p>
          </Link>
        </Card>
        <Card imgAlt="EwasteRJ" imgSrc="/images/picture2.jpg" className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <Link href={"https://www.instagram.com/ewasterj/?hl=en"}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EwasteRJ</h5>
            <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
              EwasteRJ is a community that operates in the field of recycling electronic waste or e-waste. Since 2015, EwasteRJ has been active in educating the Indonesian public about the dangers of electronic waste. In the campaign
              carried out, EwasteRJ also provides knowledge to the public regarding how to dispose of electronic waste properly.
            </p>
          </Link>
        </Card>
        <Card imgAlt="Indonesian Plastics Recycle" imgSrc="/images/picture3.jpg" className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <Link href={"https://www.epr-indonesia.id/id/directories/Indonesian%20Plastic%20Recyclers%20%28IPR%29"}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indonesian Plastics Recycle</h5>
            <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
              Indonesian Plastic Recycle (IPR) fokus mewadahi para pelaku usaha di bidang daur ulang plastik. Asosiasi ini bertujuan menciptakan ekosistem daur ulang plastik yang harmonis, agar dapat membangun ekonomi melingkar (circular
              economy) yang berkelanjutan di kalangan pelaku usaha daur ulang plastik tersebut. Selain itu, IPR juga ingin berkontribusi terhadap kelestarian lingkungan hidup.
            </p>
          </Link>
        </Card>
      </div>

      <FooterLanding />
    </>
  );
}
