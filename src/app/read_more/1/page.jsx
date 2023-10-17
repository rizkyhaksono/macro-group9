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
            Dinas Lingkungan Hidup Kota Batam bersama Tim Penggerak PKK Kota Batam melakukan Sosialisasi Pilah Sampah dari Rumah di Kelurahan Tembesi, Kecamatan Sagulung.
          </h2>
          <p>{"Jum'at, 8 September 2023"}</p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Dinas Lingkungan Hidup Kota Batam bersama Tim Penggerak PKK Kota Batam melakukan Sosialisasi Pilah Sampah dari Rumah di Kelurahan Tembesi, Kecamatan Sagulung. Acara dihadiri langsung oleh Ketua Tim Penggerak PKK Kota Batam, Hj.
            Marlin Agustina yang sekaligus Wakil Gubernur Provinsi Kepri. Dalam sambutannya ia mengajak ibu-ibu ikut serta membantu terwujudnya Kota Batam yang bersih dengan memilah sampah dari rumah dan dari pilah sampah tersebut, sampah
            yang bernilai ekonomis dapat dijual ke Bank Sampah. Pada kesempatan itu juga Ketua Tim Penggerak PKK Kota Batam juga meresmikan Bank Sampah dari Program CSR PT. Transgasindo di Perumahan Permata Rhabayu RW.18.
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
